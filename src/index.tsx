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

const trackingId = process.env[Consts.ENV_KEY_GA_TRACKING_ID];

if (trackingId) {
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);
} else {
  console.error(
    `${Consts.ENV_KEY_GA_TRACKING_ID} environment variable is missing`
  );
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
