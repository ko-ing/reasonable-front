export enum photoAction {
    SET,
    ADD,
    DELETE,
    GET
}

export const setPhotos = (photos: string[]) => {
    return {
        type: photoAction.SET,
        payload: {
            photos: photos
        }
    }
}