import { useState, useEffect, useCallback } from 'react';
import { getDomInfo, getResourcesInfo } from '../../fetch';

const useData = () => {
  const [domState, setDomState] = useState([]);
  const [resState, setResState] = useState([]);

  const getDomData = useCallback(async () => {
    const data = await getDomInfo();
    setDomState(data);
  }, []);

  const getResourcesData = useCallback(async () => {
    const data = await getResourcesInfo();
    setResState(data);
  }, []);

  useEffect(() => {
    getDomData();
    getResourcesData();
  }, [getDomData, getResourcesData]);

  return {
    domState,
    resState,
  };
};

export default useData;
