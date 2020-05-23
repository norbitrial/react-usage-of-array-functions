import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders page without crahsing", () => {
  render(<App />);
});
