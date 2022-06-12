import React from "react";
import { connect } from "react-redux";

const ModelLoadingMessage = (props) => {

  return (
    <div style={{zIndex: 150, display: props.filePreparingVisibility ? "block" : "none"}}
      className="model-loading-message-wrapper">
      <div style={{ display: "flex", 
                    justifyContent: "center" }}>
        <figure id="model-loading-message-figure">
          <img src="../../static/gif/loading.gif"
               alt="loading..."
               className="loading-gif"/>
          <figcaption>
            <p className="model-loading-message">
              Model is loading. Please wait!
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {filePreparingVisibility: state.filePreparingVisibility.visible};
};

export default connect(mapStateToProps, {})(ModelLoadingMessage);
