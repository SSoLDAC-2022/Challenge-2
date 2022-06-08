import React from 'react'
import NewDataInputWindow from './graph_query/NewDataInputWindow'
import QueryWindow from './graph_query/QueryWindow'

const GraphInteractionWrapper = () => {
  return (
    <div className='graph_interaction_wrapper'>
        <QueryWindow/>
        <NewDataInputWindow/>
    </div>
  )
}

export default GraphInteractionWrapper