import React from 'react'
import { increaseValue } from '../actions/increaseValue'
import { connect } from 'react-redux'

const App = (props) => {
  return (
      <div>
          <button onClick={() => props.increaseValue(props.value + 1)}>increment</button>
          <div>{props.value}</div>
      </div>
  )
}

const mapStateToProps = (state) => {
    return {value: state.value.value}
}

export default connect(mapStateToProps, {increaseValue})(App)