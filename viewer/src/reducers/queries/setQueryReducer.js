const INITIAL_STATE = {
    message: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ex: <https://example.com/>
PREFIX ifc: <http://ifcowl.openbimstandards.org/IFC2X3_Final#>
PREFIX inst: <https://web-bim/resources/>
SELECT * 
WHERE {
    ?item a ifc:IfcWindow .
}`,
}

const setQueryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case 'SET_QUERY':
            return {...state, message : action.payload};
        default:
            return state;
    };
};

export {setQueryReducer};