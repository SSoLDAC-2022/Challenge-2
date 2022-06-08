const INITIAL_STATE = {
    value: 0,
}

const increaseValueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case "INCREASE":
            return {...state, value: action.payload};
        default:
            return state;
    }
}

export {increaseValueReducer}