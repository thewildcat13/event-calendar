import config from './config';

export function checkAuth() {
    return localStorage.getItem("email") === config.email &&
    localStorage.getItem("pass") === config.pass ? true : false;
}
