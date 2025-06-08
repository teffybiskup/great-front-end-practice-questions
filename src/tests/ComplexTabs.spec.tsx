import { render, screen, fireEvent } from "@testing-library/react";
import ComplexTabs from "../components/Tabs/ComplexTabs";

const items = [
  {
    value: 'html',
    label: 'HTML',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    value: 'css',
    label: 'CSS',
    content:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    value: 'javascript',
    label: 'JavaScript',
    content:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
];

describe("ComplexTabs", () => {
  it("should show only the first tab content by default", () => {
    render(<ComplexTabs items={items} />);
    expect(screen.getByText(items[0].content)).toBeVisible();
    expect(screen.getByText(items[1].content)).not.toBeVisible();
    expect(screen.getByText(items[2].content)).not.toBeVisible();
  });

  it("should show the correct content when a tab is clicked", () => {
    render(<ComplexTabs items={items} />);

    fireEvent.click(screen.getByText("CSS"));
    expect(screen.getByText(items[1].content)).toBeVisible();
    expect(screen.getByText(items[0].content)).not.toBeVisible();
    expect(screen.getByText(items[2].content)).not.toBeVisible();

    fireEvent.click(screen.getByText("JavaScript"));
    expect(screen.getByText(items[2].content)).toBeVisible();
    expect(screen.getByText(items[0].content)).not.toBeVisible();
    expect(screen.getByText(items[1].content)).not.toBeVisible();
  });

  it("should apply the active class to the selected tab", () => {
    render(<ComplexTabs items={items} />);
    const htmlBtn = screen.getByText("HTML");
    const cssBtn = screen.getByText("CSS");
    const jsBtn = screen.getByText("JavaScript");

    expect(htmlBtn.className).toContain("tabs-list-item--active");
    expect(cssBtn.className).not.toContain("tabs-list-item--active");
    expect(jsBtn.className).not.toContain("tabs-list-item--active");

    fireEvent.click(cssBtn);
    expect(htmlBtn.className).not.toContain("tabs-list-item--active");
    expect(cssBtn.className).toContain("tabs-list-item--active");
    expect(jsBtn.className).not.toContain("tabs-list-item--active");

    fireEvent.click(jsBtn);
    expect(htmlBtn.className).not.toContain("tabs-list-item--active");
    expect(cssBtn.className).not.toContain("tabs-list-item--active");
    expect(jsBtn.className).toContain("tabs-list-item--active");
  });
});
