const INITIAL_STATE = {
    elementId: null,
}

const setSelectedElementReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'SET_SELECTED_ELEMENT':
            return {...state, elementId : action.payload};
        default:
            return state;
    };
};

export {setSelectedElementReducer};