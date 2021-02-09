import { render, screen } from "@testing-library/react";
import App from "./App";

test("Default favorite list shows 'is empty' message initially", () => {
  render(<App />);
  const defaultList = screen.getByTestId("default-test-favorites");
  expect(defaultList).toHaveTextContent(
    "Nothing to see here...yet. Use search on left to add."
  );
});

test("Default watched list shows 'is empty' message initially", () => {
  render(<App />);
  const defaultList = screen.getByTestId("default-test-watched");
  expect(defaultList).toHaveTextContent(
    "Nothing to see here...yet. Use search on left to add."
  );
});

test("Default must-watch list shows 'is empty' message initially", () => {
  render(<App />);
  const defaultList = screen.getByTestId("default-test-must-watch");
  expect(defaultList).toHaveTextContent(
    "Nothing to see here...yet. Use search on left to add."
  );
});

// Other Things to Test (still learning how to):
// Test the reducer action types
// test graph ql fetches
