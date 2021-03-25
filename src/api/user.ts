import {get, post} from "./rest";

interface signUp {
    userId: string,
    password: string,
    userName: string,
    email: string,
}

interface signIn {
    userId: string,
    password: string,
}

export const signUp = (data: signUp) => {
    return post("/auth/signUp", data);
}

export const signIn = (data: signIn) => {
    return post("/auth/signIn", data);
}

export const test = () => {
    return get("/hello-calendar");
}