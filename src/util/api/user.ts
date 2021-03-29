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
    const token = getXSRFToken();

    postUrlEncoded("/auth/signIn", data, {withCredentials: true})
    .then((res: any) => {
        // SUCCEED
        console.log("res", res);
    }).catch((error: any) => {
        // FAILED
        console.log("error", error);
    });

    
    // console.log("token", token);

    // return postUrlEncoded("/auth/signIn", data, {"XSRF-TOKEN": token, withCredentials: true});
}

export const test = () => {
    return get("/hello-calendar");
}