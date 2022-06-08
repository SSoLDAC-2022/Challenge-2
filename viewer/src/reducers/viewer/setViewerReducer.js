const INITIAL_STATE = {
    viewer: null,
}

const setViewerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'SET_VIEWER_CONFIG':
            return {...state, viewer : action.payload};
        default:
            return state;
    };
};

export {setViewerReducer};