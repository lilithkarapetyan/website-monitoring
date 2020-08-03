/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { useState, useEffect, useCallback } from 'react';
import { getAnalytics as fetchAnalytics, getInfo as fetchInfo } from '../../fetch';
import { arraify, groupBy, sortObjValues } from '../../helpers';

const useData = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [info, setInfo] = useState([]);
  const [requests, setRequests] = useState([]);
  const [images, setImages] = useState([]);
  const [scripts, setScripts] = useState([]);
  const [warningsStat, setWarningsStat] = useState([]);

  const getAnalytics = useCallback(async () => {
    const data = await fetchAnalytics();
    return data;
  }, []);

  const getInfo = useCallback(async () => {
    const data = await fetchInfo();
    return data;
  }, []);

  useEffect(() => {
    Promise.all([getAnalytics(), getInfo()]).then(([dataObj, infoObj]) => {
      const newInfo = [];
      const newWarnings = [];
      const newSuggestions = [];
      const data = arraify(dataObj);
      const dom = data.filter((item) => item.entryType === 'navigation');
      const res = data.filter((item) => item.entryType === 'resource');

      const reqs = {};
      const imgs = {};
      const scriptsObj = {};
      const cached = {
        imgs: {
          total: 0,
          inCache: 0,
        },
        scripts: {
          total: 0,
          inCache: 0,
        },
        links: {
          total: 0,
          inCache: 0,
        },
      };
      const suggest = {
        imageFormat: {
          problem: 'Change the format of the images to .webp for better performance',
          details: ['Detected another format in: \n'],
          count: 0,
        },
        scriptMin: {
          problem: 'Minify JS files for better performance',
          details: ['Not Minified files: \n'],
          count: 0,
        },
        cssMin: {
          problem: 'Minify CSS files for better performance',
          details: ['Not Minified files: \n'],
          count: 0,
        },
      };

      for (const item of res) {
        if (item.initiatorType === 'xmlhttprequest') {
          if (!reqs[item.name]) {
            reqs[item.name] = {
              count: 1,
              duration: item.duration,
              size: item.encodedBodySize,
            };
          } else {
            reqs[item.name].count += 1;
            reqs[item.name].duration += item.duration;
            reqs[item.name].size += item.encodedBodySize;
          }
        } else if (item.initiatorType === 'img') {
          cached.imgs.total += 1;
          cached.imgs.inCache += item.isCached;

          if (item.needToChangeImgFormat) {
            suggest.imageFormat.details.push(`${item.name} \n\n`);
            suggest.imageFormat.count += 1;
          }

          if (!item.isCached) {
            if (!imgs[item.name]) {
              imgs[item.name] = {
                count: 1,
                duration: item.duration,
                size: item.transferSize,
              };
            } else {
              imgs[item.name].count += 1;
              imgs[item.name].duration += item.duration;
              imgs[item.name].size += item.transferSize;
            }
          }
        } else if (item.initiatorType === 'script') {
          cached.scripts.total += 1;
          cached.scripts.inCache += item.isCached;

          if (!scriptsObj[item.name]) {
            scriptsObj[item.name] = {
              count: 1,
              duration: item.duration,
              size: item.transferSize,
            };
          } else {
            scriptsObj[item.name].count += 1;
            scriptsObj[item.name].duration += item.duration;
            scriptsObj[item.name].size += item.transferSize;
          }
          if (!item.isMinified) {
            suggest.scriptMin.details.push(`${item.name} \n\n`);
            suggest.scriptMin.count += 1;
          }
        } else if (item.initiatorType === 'link' || item.initiatorType === 'css') {
          cached.links.total += 1;
          cached.links.inCache += item.isCached;

          if (!item.isMinified) {
            suggest.cssMin.details.push(`${item.name} \n\n`);
            suggest.cssMin.count += 1;
          }
        }
      }

      if (suggest.imageFormat.count) {
        suggest.imageFormat.details = [...new Set(suggest.imageFormat.details)].join('');
        newSuggestions.push(suggest.imageFormat);
      }
      if (suggest.scriptMin.count) {
        suggest.scriptMin.details = [...new Set(suggest.scriptMin.details)].join('');
        newSuggestions.push(suggest.scriptMin);
      }
      if (suggest.cssMin.count) {
        suggest.cssMin.details = [...new Set(suggest.cssMin.details)].join('');
        newSuggestions.push(suggest.cssMin);
      }

      const grouped = sortObjValues(groupBy(arraify(infoObj), 'type'), 'date', -1);
      const warn = [];

      for (const w of Object.values(grouped)) {
        w[0].date = new Date(w[0].date).toString();
        warn.push(w[0]);
      }
      newWarnings.push(...warn);

      const infoArr = arraify({ ...infoObj });
      for (const item of infoArr) {
        item.date = Math.floor(item.date / (60 * 60 * 1000)) * (60 * 60 * 1000);
      }
      const warningsCount = groupBy(arraify(infoArr), 'date');
      const warningsCountArr = [];
      for (const key in warningsCount) {
        warningsCountArr.push({
          date: key * 1,
          count: warningsCount[key].length,
        });
      }
      warningsCountArr.sort((a, b) => a.date - b.date);
      for (const item of warningsCountArr) {
        item.date = new Date(item.date).toLocaleString();
      }

      const reqData = [];
      const imgData = [];
      const scriptData = [];
      for (const r in reqs) {
        reqData.push({
          url: r,
          duration: reqs[r].duration / reqs[r].count,
          size: reqs[r].size / reqs[r].count,
        });
      }
      for (const i in imgs) {
        imgData.push({
          url: i,
          duration: imgs[i].duration / imgs[i].count,
          size: imgs[i].size / imgs[i].count,
        });
      }
      for (const i in scriptsObj) {
        scriptData.push({
          url: i,
          duration: scriptsObj[i].duration / scriptsObj[i].count,
          size: scriptsObj[i].size / scriptsObj[i].count,
        });
      }

      const avgDomContentLoad = dom.reduce((total, next) => (
        total + next.domContentLoaded), 0) / dom.length || -1;

      const avgDomInteractive = dom.reduce((total, next) => (
        total + next.domInteractive), 0) / dom.length || -1;

      const avgDomComplete = dom.reduce((total, next) => (
        total + next.domComplete), 0) / dom.length || -1;

      if (avgDomContentLoad >= 0) {
        newInfo.push({
          key: 'Dom Content Loading Time',
          value: `${avgDomContentLoad}ms`,
        });
      }
      if (avgDomInteractive >= 0) {
        newInfo.push({
          key: 'Dom Content was interactive after',
          value: `${avgDomInteractive}ms`,
        });
      }
      if (avgDomComplete >= 0) {
        newInfo.push({
          key: 'Dom Content was ready after',
          value: `${avgDomComplete}ms`,
        });
      }
      if (cached.imgs.total) {
        newInfo.push({
          key: 'Percentage of the images cached',
          value: `${(cached.imgs.inCache / cached.imgs.total) * 100}%`,
        });
      }
      if (cached.scripts.total) {
        newInfo.push({
          key: 'Percentage of the JS files cached',
          value: `${(cached.scripts.inCache / cached.scripts.total) * 100}%`,
        });
      }
      if (cached.links.total) {
        newInfo.push({
          key: 'Percentage of the CSS files cached',
          value: `${(cached.links.inCache / cached.links.total) * 100}%`,
        });
      }

      setImages(imgData);
      setScripts(scriptData);
      setRequests(reqData);
      setInfo(newInfo);
      setWarnings(newWarnings);
      setSuggestions(newSuggestions);
      setWarningsStat(warningsCountArr);
    });
  }, [getAnalytics, getInfo]);

  return {
    suggestions,
    warnings,
    info,
    requests,
    images,
    warningsStat,
    scripts,
  };
};

export default useData;
