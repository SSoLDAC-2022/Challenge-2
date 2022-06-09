const INITIAL_STATE = {
    isOpen: false,
}

const setSessionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'SET_SESSION_STATUS':
            return {...state, isOpen : action.payload};
        default:
            return state;
    };
};

export {setSessionReducer};