const Secret = () => {
    const refStyle = {
      padding: "24px",
      color: "black",
      textAlign: "center"
    };
    return (<div style={refStyle}>
        <div>
          <h1> Kecycloak Application LOGIN SUCCESS !!! </h1>
          <p> This is being displayed from if you are <b>LOGGED IN</b> from keycloak </p>
        </div>
    </div>
  );
}

export default Secret;