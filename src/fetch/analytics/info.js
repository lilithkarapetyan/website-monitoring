import axios from './axios';

const getInfo = async () => {
  try {
    const data = await axios.get('info.json');
    return data.data;
  } catch (e) {
    console.warn('oooo');
    return false;
  }
};
export default getInfo;
