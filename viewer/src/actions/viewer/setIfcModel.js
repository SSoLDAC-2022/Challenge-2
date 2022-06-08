const setIfcModel = (ifcModel) => {
    return {
        type: 'SET_MODEL',
        payload: ifcModel,
    }
};

export {setIfcModel};