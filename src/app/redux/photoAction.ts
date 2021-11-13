export enum photoAction {
    SET,
    ADD,
    DELETE,
    GET,
    PAGE_INCREASE
}

export const setPhotos = (photos: any[]) => {
    return {
        type: photoAction.SET,
        payload: photos
    }
}

export const addPhotos = (photos: any[]) => {
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