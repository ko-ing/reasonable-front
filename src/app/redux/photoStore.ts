import { photoAction } from "./photoAction";

interface stateInterface  {
    photos: any[]
    page: number
}

const init: stateInterface = {
    photos: [],
    page: 0
}

const photoStore = (state: stateInterface = init, action: any) : stateInterface => {
    switch(action.type){
        case photoAction.SET:
            return {photos: action.payload, page: state.page};
        case photoAction.ADD:
            return {photos: [...state.photos, ...action.payload], page: state.page}
        case photoAction.PAGE_INCREASE:
            return {photos: state.photos, page: state.page + 1}
        default:
            return {photos: [], page: state.page};
    }
}

export default photoStore;