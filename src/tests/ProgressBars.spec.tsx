import { render, screen, fireEvent, act } from "@testing-library/react";
import ProgressBars from "../components/ProgressBars/ProgressBars";

jest.useFakeTimers();

describe("ProgressBars", () => {
  it("should add a progress bar when button is clicked", () => {
    render(<ProgressBars />);
    fireEvent.click(screen.getByTestId("add-button"));
    expect(screen.getAllByTestId("bar")).toHaveLength(1);
  });

  it("should fill up progress bar to 100% over time", () => {
    render(<ProgressBars />);

    fireEvent.click(screen.getByTestId("add-button"));

    let progress = screen.getAllByTestId("progress")[0];
    expect(progress).toHaveStyle("width: 0%");

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    progress = screen.getAllByTestId("progress")[0];
    expect(progress).toHaveStyle("width: 100%");
  });

  it("should fill up multiple progress bars", () => {
    render(<ProgressBars />);

    fireEvent.click(screen.getByTestId("add-button"));

    act(() => {
      jest.advanceTimersByTime(500);
    });

    fireEvent.click(screen.getByTestId("add-button"));

    let progress = screen.getAllByTestId("progress");

    expect(progress[0]).not.toHaveStyle("width: 0%");
    expect(progress[1]).toHaveStyle("width: 0%");

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(progress[0]).toHaveStyle("width: 100%");
    expect(progress[1]).toHaveStyle("width: 100%");
  });
});
