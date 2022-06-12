import React from 'react'
import { useDropzone } from "react-dropzone";

const DragAndDrop = ({ onDrop, accept }) => {

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, multiple: false});
   
    const dragingFileMessage = "Now drop the file!"
    const dragAndDropMessage = "Drag and drop your IFC file here or click to select the file"

    return (
        <div className="drag-and-drop-div-wrapper" {...getRootProps()}>
            <input className="drag-and-drop-input" {...getInputProps()} />
            <div className='drag-and-drop-building-icon-wrapper'>
                <i className='building icon'></i>
            </div>
            <div className="drag-and-drop-text-div-wrapper">
                {isDragActive ? <p className="drag-and-drop-content-message">{dragingFileMessage}</p> : 
                                <p className="drag-and-drop-content-message">{dragAndDropMessage}</p>}
            </div>
        </div>
  )
}

export default DragAndDrop