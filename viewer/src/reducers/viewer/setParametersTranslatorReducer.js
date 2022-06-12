const INITIAL_STATE = {
    dictionary: null,
}

const setParametersTranslatorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'SET_PARAMETERS_TRANSLATOR':
            return {...state, dictionary : action.payload};
        default:
            return state;
    };
};

export {setParametersTranslatorReducer};