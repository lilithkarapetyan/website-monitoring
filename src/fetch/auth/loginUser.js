import axios from '../axiosMain';

const sendUserLogininfo = async (body) => {
    try {
        const users = await axios.get('users.json');
        const user = await Object.values(users.data).filter(user => user.email === body.email);

        if (user[0].password !== body.password) {
            
            console.log(body.password, user[0].password)
        } else {
            return user[0];
        }
    } catch(e) {
        console.log("Login is failed")
    }
};

export default sendUserLogininfo;