const setQuery = (message) => {
    return {
        type: 'SET_QUERY',
        payload: message
    }
};

export {setQuery};