const INITIAL_STATE = {
    ifcModel: null,
}

const setIfcModelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'SET_MODEL':
            return {...state, ifcModel : action.payload};
        default:
            return state;
    };
};

export {setIfcModelReducer};