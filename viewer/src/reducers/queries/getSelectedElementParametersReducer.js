const INITIAL_STATE = {
    results: null,
}

const getSelectedElementParametersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'GET_SELECTED_ELEMENT_PARAMETERS':
            return {...state, results : action.payload};
        default:
            return state;
    };
};

export {getSelectedElementParametersReducer};