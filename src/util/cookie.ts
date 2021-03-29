import Cookies from 'universal-cookie';

export const getCookie = () => {
    const cookies = new Cookies();
    return cookies;
}

export const getXSRFToken = () => {
    return getCookie().get('XSRF-TOKEN');
}