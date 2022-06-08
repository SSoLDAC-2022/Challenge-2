const setFilePreparingVisibility = (isVisible) => {
    return {
        type: 'FILE_PREPARING_VISIBILITY',
        payload: isVisible
    }
};

export {setFilePreparingVisibility};