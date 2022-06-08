import { combineReducers } from "redux";
import { setFileLoaderVisibilityReducer} from "./file_loader_reducers/setFileLoaderVisibilityReducer"
import { setFilePreparingVisibilityReducer } from "./file_loader_reducers/setFilePreparingVisibilityReducer"
import { setViewerReducer } from "./viewer/setViewerReducer";
import { setIfcModelReducer } from "./viewer/setIfcModelReducer";

export default combineReducers({
    fileLoaderVisibility: setFileLoaderVisibilityReducer,
    filePreparingVisibility: setFilePreparingVisibilityReducer,
    viewer: setViewerReducer,
    ifcModel: setIfcModelReducer,
});