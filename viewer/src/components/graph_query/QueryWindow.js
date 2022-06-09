import React, { useEffect, useState } from 'react'
import {send_post_query} from '../../API/GraphConnector'

const QueryWindow = () => {

  const [input, setInput] = useState(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ex: <https://example.com/>
PREFIX ifc: <http://ifcowl.openbimstandards.org/IFC2X3_Final#>
PREFIX inst: <https://web-bim/resources/>
SELECT * 
WHERE {
    ?item a ifc:IfcWindow .
}`)

  useEffect(() => {
    console.log(input)
  },[input])

  const sendRequest = () => {
    // var resp = send_post_query(input).then(e => e)
    console.log('click')
  }

  return (
    <div>
       <textarea type="text" 
                 name="name" 
                 className='graph-interaction-input' 
                 value={input}
                 onChange={(e) => {setInput(e.target.value)}}/>
    <div className='querrySendButton'
         onClick={sendRequest}>
           QUERRY
    </div>
    </div>
  )
}

export default QueryWindow