import { photoAction } from "./photoAction";

interface stateInterface  {
    photos: string[]
}

const init: stateInterface = {
    photos: []
}

const photoStore = (state: stateInterface = init, action: any) : stateInterface => {
    switch(action.type){
        case photoAction.SET:
            return {photos: action.payload};
        case photoAction.ADD:
            return {photos: [...state.photos, ...action.payload]}
        default:
            return {photos: []};
    }
}

export default photoStore;