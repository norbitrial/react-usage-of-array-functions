import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./serviceWorker";
import ReactGA from "react-ga";
import Consts from "./Consts";

import "./index.css";

ReactGA.initialize(Consts.GATrackingId);

if (window.location.hostname !== "localhost") {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

unregister();
