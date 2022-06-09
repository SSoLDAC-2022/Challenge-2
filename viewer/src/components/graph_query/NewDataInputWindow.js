import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const NewDataInputWindow = (props) => {

  const [input, setInput] = useState('')

  useEffect(() => {
    setInput(props.message)
  }, [props.message])

  return (
    <div>
      <textarea  type="text" 
                 name="name" 
                 className='graph-interaction-input' 
                 value={input}
                 onChange={(e) => {setInput(e.target.value)}}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.outputMessage.message
  }
}

export default connect(mapStateToProps, {})(NewDataInputWindow)