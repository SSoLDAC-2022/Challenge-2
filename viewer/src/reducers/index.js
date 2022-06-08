import { combineReducers } from "redux";
import { increaseValueReducer } from "./increaseValueReducer";
import { setFileLoaderVisibilityReducer} from "./file_loader_reducers/setFileLoaderVisibilityReducer"
import { setFilePreparingVisibilityReducer } from "./file_loader_reducers/setFilePreparingVisibilityReducer"
import { setViewerReducer } from "./viewer/setViewerReducer";

export default combineReducers({
    value: increaseValueReducer,
    fileLoaderVisibility: setFileLoaderVisibilityReducer,
    filePreparingVisibility: setFilePreparingVisibilityReducer,
    viewer: setViewerReducer,

});