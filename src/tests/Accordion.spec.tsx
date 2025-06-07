import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../components/Accordion/Accordion";

describe("Accordion", () => {
  it("should not see items content at first", () => {
    render(<Accordion/>);

    // First Item
    const firstItemContent = screen.getByTestId("first-item-content");
    expect(firstItemContent).toHaveStyle("display: none");

    const firstItemIcon = screen.getByTestId("first-item-icon");
    expect(firstItemIcon).not.toHaveClass("accordion-icon--rotated");

    // Second Item
    const secondItemContent = screen.getByTestId("second-item-content");
    expect(secondItemContent).toHaveStyle("display: none");

    const secondItemIcon = screen.getByTestId("first-item-icon");
    expect(secondItemIcon).not.toHaveClass("accordion-icon--rotated");

    // Third Item
    const thirdItemContent = screen.getByTestId("third-item-content");
    expect(thirdItemContent).toHaveStyle("display: none");

    const thirdItemIcon = screen.getByTestId("first-item-icon");
    expect(thirdItemIcon).not.toHaveClass("accordion-icon--rotated");
  });

  it("should expand item after clicking on its title", () => {
    render(<Accordion/>);

    // First Item
    const firstItemTitle = screen.getByTestId("first-item-title");
    const firstItemIcon = screen.getByTestId("first-item-icon");
    const firstItemContent = screen.getByTestId("first-item-content");

    fireEvent.click(firstItemTitle);

    expect(firstItemIcon).toHaveClass("accordion-icon--rotated");
    expect(firstItemContent).toHaveStyle("display: inline");

    // Second Item
    const secondItemTitle = screen.getByTestId("second-item-title");
    const secondItemIcon = screen.getByTestId("second-item-icon");
    const secondItemContent = screen.getByTestId("second-item-content");

    fireEvent.click(secondItemTitle);

    expect(secondItemIcon).toHaveClass("accordion-icon--rotated");
    expect(secondItemContent).toHaveStyle("display: inline");

    // Third Item
    const thirdItemTitle = screen.getByTestId("third-item-title");
    const thirdItemIcon = screen.getByTestId("third-item-icon");
    const thirdItemContent = screen.getByTestId("first-item-content");

    fireEvent.click(thirdItemTitle);

    expect(thirdItemIcon).toHaveClass("accordion-icon--rotated");
    expect(thirdItemContent).toHaveStyle("display: inline");
  });

  it("should expand item after clicking on its title and collapse it after clicking for the second time", () => {
    render(<Accordion/>);

    // First Item
    const firstItemTitle = screen.getByTestId("first-item-title");
    const firstItemIcon = screen.getByTestId("first-item-icon");
    const firstItemContent = screen.getByTestId("first-item-content");

    fireEvent.click(firstItemTitle);

    expect(firstItemIcon).toHaveClass("accordion-icon--rotated");
    expect(firstItemContent).toHaveStyle("display: inline");

    fireEvent.click(firstItemTitle);

    expect(firstItemIcon).not.toHaveClass("accordion-icon--rotated");
    expect(firstItemContent).toHaveStyle("display: none");

    // Second Item
    const secondItemTitle = screen.getByTestId("second-item-title");
    const secondItemIcon = screen.getByTestId("second-item-icon");
    const secondItemContent = screen.getByTestId("second-item-content");

    fireEvent.click(secondItemTitle);

    expect(secondItemIcon).toHaveClass("accordion-icon--rotated");
    expect(secondItemContent).toHaveStyle("display: inline");

    fireEvent.click(secondItemTitle);

    expect(secondItemIcon).not.toHaveClass("accordion-icon--rotated");
    expect(secondItemContent).toHaveStyle("display: none");

    // Third Item
    const thirdItemTitle = screen.getByTestId("third-item-title");
    const thirdItemIcon = screen.getByTestId("third-item-icon");
    const thirdItemContent = screen.getByTestId("third-item-content");

    fireEvent.click(thirdItemTitle);

    expect(thirdItemIcon).toHaveClass("accordion-icon--rotated");
    expect(thirdItemContent).toHaveStyle("display: inline");

    fireEvent.click(thirdItemTitle);

    expect(thirdItemIcon).not.toHaveClass("accordion-icon--rotated");
    expect(thirdItemContent).toHaveStyle("display: none");
  });
});
