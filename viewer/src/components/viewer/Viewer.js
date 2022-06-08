import React, { useState } from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IFCBEAM, IFCCOLUMN, IFCWALL, IFCSLAB, IFCDOOR, IFCWINDOW, IFCPILE, IFCWALLSTANDARDCASE, IFCFURNISHINGELEMENT } from "web-ifc";
// import {viewerInitializer, selectElement, resetComponentsVisibility} from '../../utils/viewer/viewer_functions'
import {viewerInitializer, createSubset} from '../../utils/viewer/viewer_functions'
import { setViewer } from '../../actions/viewer/setViewer';
import GraphInteractionWrapper from '../GraphInteractionWrapper';

const Viewer = (props) => {

    const [translator, setTransaltor] = useState(null);
    const [allIds, setAllIds] = useState([]);

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
          [IFCCOLUMN, IFCDOOR, IFCSLAB, IFCWALL, IFCWINDOW, IFCPILE, IFCWALLSTANDARDCASE, IFCFURNISHINGELEMENT].forEach(async element => {
            result = await props.viewer.IFC.getAllItemsOfType(props.ifcModel.modelID, element).then(e => e)
            ids.push.apply(ids, result)
          });
          setAllIds(ids)
        }
        if(props.ifcModel){
          replace()
        }
      }, [props.ifcModel]);

    useEffect(() => {
      const generateStructure = async () => {
        await generateTranslactionStructure();
      }
      if(props.ifcModel){
        generateStructure();
      }
    }, [allIds])  

    const generateTranslactionStructure = async () => {
      var promises = [];
      allIds.forEach(elementId => {
        promises.push(props.viewer.IFC.getProperties(props.ifcModel.modelID, elementId, true, true).then(e => e));
      });
      var x = await Promise.all(promises).then(e => e)
      var tempDict = {}
      x.map(e => {tempDict[e.GlobalId.value] = tempDict[e.expressID]})
      setTransaltor(tempDict);
      var allElementsIds = Array.from(new Set(allIds));
      const items = props.viewer.context.items;
      items.pickableIfcModels = items.pickableIfcModels.filter((model) => model !== props.ifcModel);
      var subset = await createSubset(props.viewer, props.ifcModel, allElementsIds, true).then(e => e);
      props.ifcModel.removeFromParent();
      items.ifcModels[0] = subset;
      items.pickableIfcModels[0] = subset;
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
      await getSelectedElement(props.viewer);
    };

    const resetComponentsVisibility = async (e) => {
      await createSubset(props.viewer, props.ifcModel.modelID, allIds, true);
    };

    return (
        <div className="viewer-component-wrapper">
          <div id="viewer-component"
            onContextMenu={resetComponentsVisibility}
            onDoubleClick={selectElement}
            ></div>
            <GraphInteractionWrapper/>
        </div>
      );
}

const mapStateToProps = (state) => {
  return {
    viewer: state.viewer.viewer,
    ifcModel: state.ifcModel.ifcModel,
  };
};

export default connect(mapStateToProps, {
    setViewer
})(Viewer);