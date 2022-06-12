const setParametersTranslator = (dictionary) => {
    return {
        type: 'SET_PARAMETERS_TRANSLATOR',
        payload: dictionary,
    }
};

export {setParametersTranslator};