import { combineReducers } from "redux";
import { setFileLoaderVisibilityReducer} from "./file_loader_reducers/setFileLoaderVisibilityReducer"
import { setFilePreparingVisibilityReducer } from "./file_loader_reducers/setFilePreparingVisibilityReducer"
import { setViewerReducer } from "./viewer/setViewerReducer";
import { setIfcModelReducer } from "./viewer/setIfcModelReducer";
import {setSelectedElementReducer} from "./viewer/setSelectedElementReducer"
import { setSessionReducer } from "./viewer/setSessionReducer";
import { setQueryOutputReducer } from "./queries/setQueryOutputReducers";
import { setQueryReducer } from "./queries/setQueryReducer";
import { setParametersTranslatorReducer } from "./viewer/setParametersTranslatorReducer";

export default combineReducers({
    fileLoaderVisibility: setFileLoaderVisibilityReducer,
    filePreparingVisibility: setFilePreparingVisibilityReducer,
    viewer: setViewerReducer,
    ifcModel: setIfcModelReducer,
    selectedElement: setSelectedElementReducer,
    session: setSessionReducer,
    outputMessage: setQueryOutputReducer,
    query: setQueryReducer,
    translator: setParametersTranslatorReducer,
});