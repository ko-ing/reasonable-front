
import {get, post, postUrlEncoded} from "./http";

export const signUp = (data: {
    userAccountId: string,
    password: string,
    userName: string,
    email: string,
}) => {
    return post("/auth/signUp", data);
}

export const signIn = async (data: {
    userAccountId: string,
    password: string,
}) => {
    return postUrlEncoded("/auth/signIn", data, {withCredentials: true})
}

export const signOff = () => {
    return post("/auth/signOff");
}

export const test = () => {
    return get("/hello-calendar");
}