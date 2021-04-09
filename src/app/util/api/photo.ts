import { get, post } from "./http"

export const saveImage = (data: FormData) => {
    return post("/photo", data, {"Content-Type": "multipart/form-data"});
}

export const getImageUrls = () => {
    return get("/photo");
}