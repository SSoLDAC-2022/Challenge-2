const setSession = (isOpen) => {
    return {
        type: 'SET_SESSION_STATUS',
        payload: isOpen,
    }
};

export {setSession};