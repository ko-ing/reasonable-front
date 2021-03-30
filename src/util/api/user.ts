
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
    return postUrlEncoded("/auth/signIn", data, {withCredentials: true})
}

export const test = () => {
    return get("/hello-calendar");
}