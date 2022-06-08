const setSelectedElement = (elementId) => {
    return {
        type: 'SET_SELECTED_ELEMENT',
        payload: elementId,
    }
};

export {setSelectedElement};