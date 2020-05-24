import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import IState from "./Interfaces/IState";

const dessertReducer: IState = { items: [] };
const mockStore = configureMockStore();
const store = mockStore({ dessertReducer });

test("Renders page without crahsing", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
