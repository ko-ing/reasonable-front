import Cookies from 'universal-cookie';

export const getCookie = () => {
    const cookies = new Cookies();
    return cookies;
}

export const getSessionIdFromCookie = () => {
    return getCookie().get('JSESSIONID');
}

export const setAccountIdOnCookie = (userAccountId: string) => {
    return getCookie().set('ACCOUNTID', userAccountId);
}

export const setUserAuthOnCookie = (auth: any) => {
    return getCookie().set('AUTH', auth);
}

export const getUserAuthFromCookie = () => {
    return getCookie().get('AUTH');
}