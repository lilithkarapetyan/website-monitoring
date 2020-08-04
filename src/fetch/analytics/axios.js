import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://web-monitoring-cba12.firebaseio.com/',
});

axiosInstance.interceptors.request.use((request) => {
  let key = '';
  const user = sessionStorage.getItem('user');
  if (user) {
    key = JSON.parse(user).app.id;
  }
  if (!request.params) {
    request.params = {};
  }
  request.params = {
    ...request.params,
    orderBy: '"appId"',
    equalTo: `"${key}"`,
  };

  return request;
});

export default axiosInstance;
