import axios from 'axios';
import { config } from '../../config/config'
import qs from 'qs';

const baseAxios = axios.create({
    withCredentials: true,
    baseURL: config.serverDomain
});  

export const get = (urlEndpoint: string, queryString?: any): any => {
    const querystring = require('querystring');
    return baseAxios.get(urlEndpoint + qs.stringify(queryString));
}

export const post = (urlEndpoint: string, data?: any, option?: any): any => {
    return baseAxios.post(urlEndpoint,data,option);
}

export const postUrlEncoded = (urlEndpoint: string, data?: any, option?: any): any => {
    return baseAxios.post(urlEndpoint, qs.stringify(data), option);
}