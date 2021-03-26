import axios from 'axios';
import { config } from '../../config/config'
import qs from 'qs';

export const get = (urlEndpoint: string, queryString?: any): any => {
    const querystring = require('querystring');
    return axios.get(config.serverDomain + urlEndpoint + qs.stringify(queryString));
}

export const post = (urlEndpoint: string, data?: any, option?: any): any => {
    return axios.post(config.serverDomain + urlEndpoint, data), option;
}

export const postUrlEncoded = (urlEndpoint: string, data?: any, option?: any): any => {
    return axios.post(config.serverDomain + urlEndpoint, qs.stringify(data), option);
}