import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://web-monitoring-cba12.firebaseio.com/',
  // // timeout: 10000,
});

axiosInstance.interceptors.request.use((request) => {
  const key = '1223334444';
  if (!request.params) {
    request.params = {};
  }
  request.params = {
    ...request.params,
    orderBy: '"companyId"',
    equalTo: `"${key}"`,
  };

  return request;
});

export default axiosInstance;
