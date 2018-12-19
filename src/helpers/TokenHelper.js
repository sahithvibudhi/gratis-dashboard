export default class TokenHelper {

    static tokenKey = 'gratis_dashboard_key';

    static storeToken(tokenValue) {
        localStorage.setItem(this.tokenKey, tokenValue);
    }

    static getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    static removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

}