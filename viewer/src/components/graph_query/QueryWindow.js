import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {send_post_query} from '../../API/GraphConnector'
import { setQueryOutput } from '../../actions/queries/setQueryOutput'

const QueryWindow = (props) => {

  const [input, setInput] = useState('');

  useEffect(() => {
    if (props.query){
      setInput(props.query)
    }
  }, [props.query])



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

const mapStateToProps = (state) => {
  return {
    query: state.query.message
  }
}


export default connect(mapStateToProps, {setQueryOutput})(QueryWindow)