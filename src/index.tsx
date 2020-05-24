import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./serviceWorker";
import ReactGA from "react-ga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Consts from "./Consts";
import thunk from "redux-thunk";
import duck from "./Duck";

import "./index.css";

ReactGA.initialize(Consts.GATrackingId);

if (window.location.hostname !== "localhost") {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const store = createStore(duck.reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

unregister();
