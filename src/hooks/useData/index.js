import { useState, useEffect } from 'react';
import { getDomInfo, getResourcesInfo } from '../../fetch';

const useData = () => {
  const [domState, setDomState] = useState([]);
  const [resState, setResState] = useState([]);

  try {
    const dom = getDomInfo();
    setDomState(dom);
    const resources = getResourcesInfo();
    setResState(resources);

    console.log(domState);
    console.log(resState);
    return [domState, resState];
  } catch (e) {
    console.error('Something went wrong:', e);
    return [[], []];
  }
};

export default useData;
