import axios from './index';

const getDomInfo = async () => {
  try {
    const data = await axios.get('domInfo.json');
    return data.data;
  } catch (e) {
    console.warn('oooo');
    return false;
  }
};

export default getDomInfo;