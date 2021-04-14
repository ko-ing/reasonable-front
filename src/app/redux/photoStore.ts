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
            return {photos: action.payload.photos};
        default:
            return {photos: []};
    }
}

export default photoStore;