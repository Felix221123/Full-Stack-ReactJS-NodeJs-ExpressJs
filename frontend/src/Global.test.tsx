import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("it should display Hello World", () => {
    render(<App />);
    const text = screen.getByText(/hello world/i);
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
});
