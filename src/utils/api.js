class Api {

    VERSION = 'v1';
    APP_TOKEN = 'DX9343ZXS9JPK5c8ws5ct9G4u3720jTQ5lHwbGJH777GflSQX1';

    BASE_URL = 'http://167.99.59.67:9494';

    URL = this.BASE_URL + '/api/' + this.VERSION + '/'

    LOGIN = this.URL + 'admin-login';
    REG_OFFICER = this.URL + 'register-officer';
}

export default new Api();
