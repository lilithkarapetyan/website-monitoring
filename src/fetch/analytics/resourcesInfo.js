import axios from './index';

const getResourcesInfo = async () => {
  const data = await axios.get('domInfo.json');
  return data.data;
};
export default getResourcesInfo;
