export enum photoAction {
    SET,
    ADD,
    DELETE,
    GET,
    PAGE_INCREASE
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

export const increasePage = () => {
    return {
        type: photoAction.PAGE_INCREASE
    }
}