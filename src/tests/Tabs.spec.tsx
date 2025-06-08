import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../components/Tabs/Tabs";

describe("Tabs", () => {
  it("should show only the HTML content by default", () => {
    render(<Tabs />);
    expect(screen.getByText(/HyperText Markup Language/i)).toBeVisible();
    expect(screen.getByText(/Cascading Style Sheets/i)).not.toBeVisible();
    expect(screen.getByText(/JavaScript,/i)).not.toBeVisible();
  });

  it("should show the CSS content when CSS tab is clicked", () => {
    render(<Tabs />);

    fireEvent.click(screen.getByText("CSS"));
    expect(screen.getByText(/Cascading Style Sheets/i)).toBeVisible();
    expect(screen.getByText(/HyperText Markup Language/i)).not.toBeVisible();
    expect(screen.getByText(/JavaScript,/i)).not.toBeVisible();
  });

  it("should show the JS content when JavaScript tab is clicked", () => {
    render(<Tabs />);

    fireEvent.click(screen.getByText("JavaScript"));
    expect(screen.getByText(/JavaScript,/i)).toBeVisible();
    expect(screen.getByText(/HyperText Markup Language/i)).not.toBeVisible();
    expect(screen.getByText(/Cascading Style Sheets/i)).not.toBeVisible();
  });

  it("should change the color of the tab button when it is active", () => {
    render(<Tabs />);
    const htmlBtn = screen.getByText("HTML");
    const cssBtn = screen.getByText("CSS");
    const jsBtn = screen.getByText("JavaScript");

    // HTML tab active
    expect(htmlBtn).toHaveStyle("color: blue");
    expect(cssBtn).toHaveStyle("color: black");
    expect(jsBtn).toHaveStyle("color: black");

    // CSS tab active
    fireEvent.click(cssBtn);
    expect(htmlBtn).toHaveStyle("color: black");
    expect(cssBtn).toHaveStyle("color: blue");
    expect(jsBtn).toHaveStyle("color: black");

    // JS tab active
    fireEvent.click(jsBtn);
    expect(htmlBtn).toHaveStyle("color: black");
    expect(cssBtn).toHaveStyle("color: black");
    expect(jsBtn).toHaveStyle("color: blue");
  });
});
