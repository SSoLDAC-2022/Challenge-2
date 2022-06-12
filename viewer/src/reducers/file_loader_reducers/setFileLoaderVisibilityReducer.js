const INITIAL_STATE = {
    visible: true,
}

const setFileLoaderVisibilityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'FILE_LOADER_VISIBILITY':
            return {...state, visible : action.payload};
        default:
            return state;
    };
};

export {setFileLoaderVisibilityReducer};