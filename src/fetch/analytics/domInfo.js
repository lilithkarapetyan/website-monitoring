import axios from './index';

const getDomInfo = async () => {
  const data = await axios.get('domInfo.json');
  return data.data;
};

export default getDomInfo;
