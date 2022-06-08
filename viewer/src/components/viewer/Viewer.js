import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IFCBEAM, IFCCOLUMN, IFCWALL, IFCSLAB, IFCDOOR, IFCWINDOW, IFCPILE } from "web-ifc";
// import {viewerInitializer, selectElement, resetComponentsVisibility} from '../../utils/viewer/viewer_functions'
import {viewerInitializer } from '../../utils/viewer/viewer_functions'
import { setViewer } from '../../actions/viewer/setViewer';
import GraphInteractionWrapper from '../GraphInteractionWrapper';

const Viewer = (props) => {

    useEffect(() => {
        const assignViewer = async () => {
            var viewer = await viewerInitializer();
            
            props.setViewer(viewer);
        }
        assignViewer();
      }, []);

    useEffect(() => {
        const replace = async () => {
          let ids = await props.viewer.IFC.getAllItemsOfType(props.ifcModel.modelID, IFCBEAM).then(e => e)
          var result;
          [IFCCOLUMN, IFCDOOR, IFCSLAB, IFCWALL, IFCWINDOW, IFCPILE].forEach(async element => {
            result = await props.viewer.IFC.getAllItemsOfType(props.ifcModel.modelID, element).then(e => e)
            ids.push.apply(ids, result)
          });
          console.log(ids);
          
        }
        if(props.ifcModel){
          replace();
        }
      }, [props.ifcModel]);

    const replaceElementsInModelBySubset = async () => {
      
    }

    const getSelectedElement = async (viewer) => {
        if (viewer) {
          const result = await viewer.pickIfcItem(false)
                                     .then((e) => {console.log(e);return e})
                                     .catch((e) => {console.log(e); return null});
          if (result){
            var { modelID, id } = result; 
            return { modelID, id };
          }
          try{
            viewer.unpickIfcItems();
          }catch(e){
            console.log(e)
          }
          return { modelID: null, id: null };  
        }
      }

    const selectElement = async () => {
      var test = await getSelectedElement(props.viewer);
    };

    return (
        <div className="viewer-component-wrapper">
          <div id="viewer-component"
            // onContextMenu={resetComponentsVisibility}
            onDoubleClick={selectElement}
            ></div>
            <GraphInteractionWrapper/>
        </div>
      );
}

const mapStateToProps = (state) => {
  return {
    viewer: state.viewer.viewer,
    // selected_element: state.selected_element.parameters,
    // visibleElements: state.lastVisibleElement.number,
    // legoBricksDataObject: state.elementsDataObject.dataObject,
    // maxElementNumber: state.maxElementNumber.number,
    ifcModel: state.ifcModel.ifcModel,
  };
};

export default connect(mapStateToProps, {
    setViewer
})(Viewer);