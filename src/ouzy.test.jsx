import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Table from "./Components/Table/ListOrderTable/index";

describe("Table", () => {
  it("renders and get App text", () => {
    render(<Table />);
    const appText = screen.getByText("App");
    expect(appText).toBeInTheDocument();
  });
});
