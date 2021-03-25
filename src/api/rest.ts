import axios from 'axios';
import { config } from '../config/config'

export const get = (urlEndpoint: string): any => {
    return axios.get(config.serverDomain + urlEndpoint);
}

export const post = (urlEndpoint: string, data?: any): any => {
    return axios.post(config.serverDomain + urlEndpoint, data);
}