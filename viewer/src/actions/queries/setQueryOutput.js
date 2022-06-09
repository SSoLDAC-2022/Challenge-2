const setQueryOutput = (message) => {
    return {
        type: 'SET_QUERY_MESSAGE',
        payload: message
    }
};

export {setQueryOutput};