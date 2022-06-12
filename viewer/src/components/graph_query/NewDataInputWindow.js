import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const NewDataInputWindow = (props) => {

  const [input, setInput] = useState('')

  useEffect(() => {
    setInput(props.message)
    console.log(props.dictionary)
  }, [props.message])

  return (
    <div>
      <textarea  type="text" 
                 name="name" 
                 className='graph-interaction-input' 
                 value={JSON.stringify(input)}
                 onChange={(e) => {setInput(e.target.value)}}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.outputMessage.message,
    dictionary: state.translator.dictionary
  }
}

export default connect(mapStateToProps, {})(NewDataInputWindow)