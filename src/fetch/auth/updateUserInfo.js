import axios from '../axiosMain';

const updateUserInfo = async (userId, userData) => {
  try {
    const data = await axios.put(`users/${userId}.json`, userData);
    return data.data;
  } catch (e) {
    console.log('update failed');
    return false;
  }
};

export default updateUserInfo;
