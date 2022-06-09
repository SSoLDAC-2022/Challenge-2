import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {send_post_query} from '../../API/GraphConnector'
import { setQueryOutput } from '../../actions/queries/setQueryOutput'

const QueryWindow = (props) => {

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

  const sendRequest = async () => {
    var resp = await send_post_query(input).then(e => e)
    console.log(resp.data.results.bindings)
    props.setQueryOutput(resp.data.results.bindings)
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
           Send a querry
    </div>
    </div>
  )
}

export default connect(null, {setQueryOutput})(QueryWindow)