const setViewer = (viewer) => {
    return {
        type: 'SET_VIEWER_CONFIG',
        payload: viewer,
    }
};

export {setViewer};