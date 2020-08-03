import axios from '../axiosMain';

const getUserInfo = async () => {
  try {
    const data = await axios.get('users.json');

    return data.data;
  } catch (e) {
    console.log('registration failed');
    return false;
  }
};

export default getUserInfo;
