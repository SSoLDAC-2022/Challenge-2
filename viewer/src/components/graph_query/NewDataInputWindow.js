import React, { useEffect, useState } from 'react'

const NewDataInputWindow = () => {

  const [input, setInput] = useState('')

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

export default NewDataInputWindow