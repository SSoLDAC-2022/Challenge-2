const INITIAL_STATE = {
    visible: false,
}

const setFilePreparingVisibilityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'FILE_PREPARING_VISIBILITY':
            return {...state, visible : action.payload};
        default:
            return state;
    };
};

export {setFilePreparingVisibilityReducer};