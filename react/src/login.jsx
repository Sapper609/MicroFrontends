export default function Login(props) {
    const refStyle = {
      padding: "24px",
      color: "black",
      textAlign: "center"
    }
  
    return (
      <div style={refStyle}>
        <h1> React Login Page !!! </h1>
        <p> This is being displayed from the <b> React </b> application!! </p>
        <p> This page is returned from <b>root.login.jsx</b> file when a user is not authenticated in keycloack</p>
        <p> This file is being imported through single spa and routed through the <b>spa.php</b> file in the php application! </p>
      </div>
    );
  }
  