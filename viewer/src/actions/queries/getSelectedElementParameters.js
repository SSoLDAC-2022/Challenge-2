const getSelectedElementParameters = (results) => {
    return {
        type: 'GET_SELECTED_ELEMENT_PARAMETERS',
        payload: results
    }
};

export {getSelectedElementParameters};