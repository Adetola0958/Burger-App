import axios from 'axios';

const instance = axios.create({
    baseURL:"https://my-burger-app-f3f54-default-rtdb.firebaseio.com/"
});

export default instance;