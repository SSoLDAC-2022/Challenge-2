const increaseValue = (value) => {
    return {
        type: "INCREASE",
        payload: value
    }
}

export {increaseValue};