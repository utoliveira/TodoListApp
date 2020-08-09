import api from './api'

const AUTH_TOKEN_KEY="authenticated_token"

class Auth {

    constructor(){
        this.authenticated = false;
    }

    login(callback){
        this.authenticated = true;
        localStorage.setItem(AUTH_TOKEN_KEY,true);
        api.defaults.headers.Authorization= "token";
        callback();
    }

    logout(callback){
        this.authenticated = false;
        localStorage.removeItem(AUTH_TOKEN_KEY);
        api.defaults.headers.Authorization= null;
        callback();
    }

    isAuthenticated(){
        return localStorage.getItem(AUTH_TOKEN_KEY);
    }
}

export default new Auth();