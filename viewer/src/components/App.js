import React from 'react'
import Footer from './Footer'
import Viewer from './viewer/Viewer'
import FileLoader from './model_loader/FileLoader'

const App = () => {
  return (
      <div>
          <Viewer/>
          <FileLoader/>
          <Footer/>
      </div>
  )
}


export default App