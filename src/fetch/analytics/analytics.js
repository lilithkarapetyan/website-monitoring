import axios from './axios';

const getAnalytics = async () => {
  try {
    const data = await axios.get('analytics.json');
    return data.data;
  } catch (e) {
    console.warn('oooo');
    return false;
  }
};

export default getAnalytics;
