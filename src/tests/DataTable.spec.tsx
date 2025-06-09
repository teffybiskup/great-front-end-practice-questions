import { render, screen, fireEvent, act } from "@testing-library/react";
import DataTable from "../components/DataTable/DataTable";
import users from "../helpers/users";

jest.useFakeTimers();

describe("DataTable", () => {
  it("should render the correct number of rows for default page size (5)", () => {
    render(<DataTable />);

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getAllByRole("row")).toHaveLength(6); // 1 header + 5 users
  });

  it("should change page size when input changes", () => {
    render(<DataTable />);
    const input = screen.getByTestId("users-input");

    fireEvent.change(input, { target: { value: "10" } });
    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getAllByRole("row")).toHaveLength(11); // 1 header + 10 users
  });

  it("should be able to navigate to next and previous pages", () => {
    render(<DataTable />);

    act(() => {
      jest.advanceTimersByTime(600);
    });

    const prevBtn = screen.getByRole("button", { name: "←" });
    const nextBtn = screen.getByRole("button", { name: "→" });

    fireEvent.click(nextBtn);
    expect(screen.getByText(/Page: 2/)).toBeInTheDocument();

    fireEvent.click(prevBtn);
    expect(screen.getByText(/Page: 1/)).toBeInTheDocument();
  });

  it("should disable previous button on first page and next button on last page", () => {
    render(<DataTable />);

    act(() => {
      jest.advanceTimersByTime(600);
    });
    
    const prevBtn = screen.getByRole("button", { name: "←" }) as HTMLButtonElement;
    const nextBtn = screen.getByRole("button", { name: "→" }) as HTMLButtonElement;

    expect(prevBtn).toBeDisabled();
    while (!nextBtn.disabled) {
      fireEvent.click(nextBtn);
    }
    expect(nextBtn).toBeDisabled();
  });

  it("should show correct total pages and updates when page size changes", () => {
    render(<DataTable />);

    act(() => {
      jest.advanceTimersByTime(600);
    });

    const input = screen.getByTestId("users-input");

    expect(screen.getByText(/Total:/)).toHaveTextContent(
      `Total: ${Math.ceil(users.length / 5)}`
    );

    fireEvent.change(input, { target: { value: "10" } });

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getByText(/Total:/)).toHaveTextContent(
      `Total: ${Math.ceil(users.length / 10)}`
    );
  });
});
