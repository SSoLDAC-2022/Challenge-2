import { IfcViewerAPI } from "web-ifc-viewer";


const viewerInitializer = async () => {
    const container = document.getElementById("viewer-component");
    const viewerLocal = new IfcViewerAPI({ container });
    viewerLocal.addGrid();
    viewerLocal.IFC.setWasmPath("../../../../static/wasm/");
    viewerLocal.IFC.loader.ifcManager.applyWebIfcConfig({
      COORDINATE_TO_ORIGIN: true,
      USE_FAST_BOOLS: false,
    });
    return viewerLocal;
  };

const showAllElements = async (viewer, modelID, allIdsToShow) => {
    await viewer.IFC.loader.ifcManager.createSubset({
      modelID: modelID,
      ids: allIdsToShow,
      removePrevious: false,
      applyBVH: true,
      customID: "full-model-subset",
    });
  }

const createSubset = async (viewer, model, ids, removePrevious=false) => {
    return await viewer.IFC.loader.ifcManager.createSubset({
      modelID: model.modelID,
      ids: ids,
      applyBVH: true,
      scene: model.parent,
      removePrevious: true,
      customID: "full-model-subset",
    });
  }

  export { viewerInitializer, showAllElements, createSubset};