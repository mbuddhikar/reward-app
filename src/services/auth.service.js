import axios from 'axios';
import api from '../utils/api';

class AuthService {

    login(loginData) {
        axios.defaults.headers.common['app-token'] = api.APP_TOKEN;
        return new Promise((resolve, reject) => {
            axios
                .post(api.LOGIN, loginData)
                .then(result => {
                    if(result.data.success){
                        resolve(result.data)
                    }else{
                        reject(result.data)
                    }
                })
                .catch(error => reject(error));
        });
    }

}

export default new AuthService();