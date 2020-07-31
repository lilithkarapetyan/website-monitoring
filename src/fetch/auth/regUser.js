import axios from '../axiosMain';

const sendUserReginfo = async (body) => {
    try {
        const data = await axios.post('users.json', body);
        return data.data;
    } catch (e) {
        console.log(body);
        console.log("registration failed");
        return false;
    }
};

export default sendUserReginfo;