import { post } from "./http"

export const saveImage = (data: FormData) => {
    return post("/photo", data, {"Content-Type": "multipart/form-data"});
}