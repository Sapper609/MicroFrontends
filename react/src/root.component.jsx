import { BrowserRouter, Link, Route } from "react-router-dom";

export default function Root(props) {
  const refStyle = {
    padding: "24px",
    display: "inline-block",
    color: "black"
  }

  return (
    <BrowserRouter basename="/">
      <Link to="/react" style={refStyle}>
        React Home
      </Link>
      <Link to="/react/subroute" style={refStyle}>
        React SubRoute
      </Link>
      <Link to="/" style={refStyle}>
        Leave React
      </Link>
    </BrowserRouter>
  );
}
