import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders h1 ", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Mohit Arora/);
  expect(h1).toHaveTextContent("Mohit Arora");
});
