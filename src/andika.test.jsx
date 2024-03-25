import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Cars from "./Pages/Cars.jsx";

describe("Cars", () => {
  it("renders and get App text", () => {
    render(<Cars />);
    const appText = screen.getByText("App");
    expect(appText).toBeInTheDocument();
  });
});
