import { observable, action } from 'mobx';
import appService from '../services/app.service';

class AppStore {

    @observable myDiary = {
        "1": [],
        "2": [],
        "3": [],
        "4": [],
        "5": [],
        "6": [],
        "7": [],
        "8": [],
        "9": [],
        "10": [],
        "11": [],
        "12": [],
        "13": [],
        "14": [],
        "15": [],
        "16": [],
        "17": [],
        "18": [],
        "19": [],
        "20": [],
        "21": [],
        "22": [],
        "23": [],
        "24": [],
        "25": [],
        "26": [],
        "27": [],
        "28": [],
        "29": [],
        "30": [],
        "31": []
    };

    @action createUserAccount(data) {

        return appService.createUserAccount(data)
            .then((data) => {
                return data;
            })
            .catch(action((err) => {
                throw err;
            }))
    }
}

export default new AppStore();
