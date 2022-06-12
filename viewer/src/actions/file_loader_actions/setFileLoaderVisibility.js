const setFileLoaderVisibility = (isVisible) => {
    return {
        type: 'FILE_LOADER_VISIBILITY',
        payload: isVisible
    }
};

export {setFileLoaderVisibility};