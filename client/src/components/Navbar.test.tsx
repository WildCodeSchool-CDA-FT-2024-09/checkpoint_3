import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar";

describe("Test Country component", () => {
  it("should render the Navbar component with 'Continent' in a H1", async () => {
    await render(<Navbar />);

    const h1 = screen.getByRole("heading", { level: 1 });

    expect(h1).toHaveTextContent("Checkpoint");
  });
});
