import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar";

describe("Test Nav component", () => {
  it("should render a title", async () => {
    await render(<Navbar />);

    const h1 = screen.getByRole("heading", { level: 1 });

    expect(h1).toHaveTextContent("Checkpoint");
  });
});
