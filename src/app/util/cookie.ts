import Cookies from 'universal-cookie';

export const getCookie = () => {
    const cookies = new Cookies();
    return cookies;
}

export const setAccountIdOnCookie = (userAccountId: string) => {
    return getCookie().set('ACCOUNTID', userAccountId);
}

export const getAccountIdOnCookie =() => {
    return getCookie().get('ACCOUNTID');
}

export const deleteAccountIdFromCookie = () => {
    return getCookie().remove('ACCOUNTID');
}

export const setUserAuthOnCookie = (auth: any) => {
    return getCookie().set('AUTH', auth);
}

export const getUserAuthFromCookie = () => {
    return getCookie().get('AUTH');
}

export const deleteUserAuthFromCookie = () => {
    return getCookie().remove('AUTH');
}