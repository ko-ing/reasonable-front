import {combineReducers} from 'redux';
import photoStore from "./photoStore";

const rootStore = combineReducers({
    photoStore
});
export default rootStore;