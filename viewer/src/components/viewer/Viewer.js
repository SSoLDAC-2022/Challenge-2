import React from 'react'
import { useEffect } from 'react';
import {viewerInitializer} from '../../utils/viewer/viewer_functions'
import { setViewer } from '../../actions/viewer/setViewer';
import { connect } from 'react-redux';

const Viewer = (props) => {

    useEffect(() => {
        const assignViewer = async () => {
            var viewer = await viewerInitializer();
            props.setViewer(viewer);
        }
        assignViewer();
      }, []);

    return (
        <div className="viewer-component-wrapper">
          <div id="viewer-component"
            // onContextMenu={resetComponentsVisibility}
            // onDoubleClick={selectElement}
            ></div>
        </div>
      );
}

export default connect(null, {
    setViewer
})(Viewer);