import { getXSRFToken } from "../cookie";
import {get, post, postUrlEncoded} from "./http";

interface signUp {
    userAccountId: string,
    password: string,
    userName: string,
    email: string,
}

interface signIn {
    userAccountId: string,
    password: string,
}

export const signUp = (data: signUp) => {
    return post("/auth/signUp", data);
}

export const signIn = async (data: signIn) => {
    const res = await postUrlEncoded("/auth/signIn", data, {withCredentials: true});
    const token = getXSRFToken();
    return postUrlEncoded("/auth/signIn", data, {"XSRF-TOKEN": token, withCredentials: true});
}

export const test = () => {
    return get("/hello-calendar");
}