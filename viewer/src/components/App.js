import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'
import Viewer from './viewer/Viewer'
import { increaseValue } from '../actions/increaseValue'
import { connect } from 'react-redux'
import FileLoader from './model_loader/FileLoader'

const App = (props) => {
  return (
      <div>
          <TopBar/>
          {/* <button onClick={() => props.increaseValue(props.value + 1)}>increment</button>
          <div>{props.value}</div> */}
          <Viewer/>
          <FileLoader/>
          <Footer/>
      </div>
  )
}

const mapStateToProps = (state) => {
    return {value: state.value.value}
}

export default connect(mapStateToProps, {increaseValue})(App)