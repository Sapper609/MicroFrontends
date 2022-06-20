import React from "react";
import KeycloakRoutes from "./KeycloakRoutes";

export default function Root(props) {
    const refStyle = {
      padding: "24px",
      color: "black",
      textAlign: "center"
    }

    return (
      <div style={refStyle}>
        <div>
          <h1> React Application !!! </h1>
          <p> This is being displayed from the <b> React </b> application!! </p>
          <p> This page can be modified from the react directory and changing out the content in the <b>root.component.jsx</b> file </p>
          <p> This file is being imported through single spa and routed through the <b>spa.php</b> file in the php application! </p>
        </div>
        <div>
            <h3>Select a button to display</h3>
            <KeycloakRoutes />;
        </div>
      </div>
    );
  }