const INITIAL_STATE = {
    message: '',
}

const setQueryOutputReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'SET_QUERY_MESSAGE':
            return {...state, message : action.payload};
        default:
            return state;
    };
};

export {setQueryOutputReducer};