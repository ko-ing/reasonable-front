export enum photoAction {
    SET,
    ADD,
    DELETE,
    GET
}

export const setPhotos = (photos: string[]) => {
    return {
        type: photoAction.SET,
        payload: photos
    }
}

export const addPhotos = (photos: string[]) => {
    return {
        type: photoAction.ADD,
        payload: photos
    }
}