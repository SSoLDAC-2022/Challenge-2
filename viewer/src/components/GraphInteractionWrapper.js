import React from 'react'
import NewDataInputWindow from './graph_ui/NewDataInputWindow'
import QueryWindow from './graph_ui/QueryWindow'

const GraphInteractionWrapper = () => {
  return (
    <div className='graph_interaction_wrapper'>
        <QueryWindow/>
        <NewDataInputWindow/>
    </div>
  )
}

export default GraphInteractionWrapper