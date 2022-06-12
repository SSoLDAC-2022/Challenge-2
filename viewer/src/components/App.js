import React from 'react'
import Footer from './Footer'
import Viewer from './viewer/Viewer'
import FileLoader from './model_loader/FileLoader'
import ElementPropertiesTab from './properties_tab/ElementPropertiesTab'

const App = () => {
  return (
      <div>
          <Viewer/>
          <FileLoader/>
          <ElementPropertiesTab/>
          <Footer/>
      </div>
  )
}


export default App