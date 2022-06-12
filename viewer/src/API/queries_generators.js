const instancePropertiesQuery = (elementId) =>{
    return `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ex: <https://example.com/>
PREFIX ifc: <http://ifcowl.openbimstandards.org/IFC2X3_Final#>
PREFIX inst: <https://web-bim/resources/>
PREFIX bot: <https://w3id.org/bot#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT DISTINCT ?property ?value 
WHERE {
  inst:${elementId} ?property ?value .
}`
}

