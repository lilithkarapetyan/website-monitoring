import axios from '../axiosMain';

const sendUserLogininfo = async () => { //eslint-disable-line
  try {
    const data = await axios.get('users.json');
    return data.data;
  } catch (e) {
    console.log('Login is failed');
  }
};

export default sendUserLogininfo;
