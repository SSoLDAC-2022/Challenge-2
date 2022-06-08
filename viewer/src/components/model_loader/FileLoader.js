import React, { useCallback, useRef, useState } from 'react'
import { connect } from "react-redux";
import DragAndDrop from './DragAndDrop'
// import { setIfcModel } from "../../actions/viewer_actions/setIfcModel";
import {setFileLoaderVisibility} from "../../actions/file_loader_actions/setFileLoaderVisibility";
import {setFilePreparingVisibility} from "../../actions/file_loader_actions/setFilePreparingVisibility";

const FileLoader = (props) => {

    const onDrop = useCallback(async acceptedFiles => {
        if (acceptedFiles[0] && props.viewer) {
            let ifcModel = await props.viewer.IFC.loadIfc(acceptedFiles[0], true);
            props.setFileLoaderVisibility(false);
            props.setFilePreparingVisibility(true);
            // props.setIfcModel(ifcModel);
        }
    }, [props.viewer]);


    return (
        <div style={{display:`${props.fileLoaderVisibility?'block':'none'}`}}>
            <div className='file-loader-close-button-wrapper'>
                <div className='file-loader-close-button' 
                     onClick={()=>{props.setFileLoaderVisibility(false)}}>
                        Cancel
                </div>
            </div>
            <DragAndDrop onDrop={onDrop}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      viewer: state.viewer.viewer,
      fileLoaderVisibility: state.fileLoaderVisibility.visible
    };
  };

export default connect(mapStateToProps, {
    // setIfcModel,
    setFileLoaderVisibility,
    setFilePreparingVisibility
  })(FileLoader);
