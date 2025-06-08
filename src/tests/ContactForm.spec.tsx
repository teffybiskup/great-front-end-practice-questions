import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import ContactForm from "../components/ContactForm/ContactForm"

describe("ContactForm", () => {
  it("should send POST request properly", async () => {
    render(<ContactForm/>);
    const nameValue = "Stefany";
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const nameField = screen.getByTestId("name-input");
    fireEvent.change(nameField, { target: { value: nameValue }});
  
    const emailField = screen.getByTestId("email-input");
    fireEvent.change(emailField, { target: { value: "test@gmail.com" }});
  
    const messageField = screen.getByTestId("message-textarea");
    fireEvent.change(messageField, { target: { value: "I want to write tests" }});

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenNthCalledWith(1, `Thank you ${nameValue}, your message was received successfully!`);
    });
  })

  it("should show error if name is empty", async () => {
    render(<ContactForm/>);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const emailField = screen.getByTestId("email-input");
    fireEvent.change(emailField, { target: { value: "test@gmail.com" }});
  
    const messageField = screen.getByTestId("message-textarea");
    fireEvent.change(messageField, { target: { value: "I want to write tests" }});

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenNthCalledWith(1, "Name cannot be empty");
    });
  })

  it("should show error if email is empty", async () => {
    render(<ContactForm/>);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const nameField = screen.getByTestId("name-input");
    fireEvent.change(nameField, { target: { value: "Stefany" }});
  
    const messageField = screen.getByTestId("message-textarea");
    fireEvent.change(messageField, { target: { value: "I want to write tests" }});

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenNthCalledWith(1, "Email cannot be empty");
    });
  })

  it("should show error if message is empty", async () => {
    render(<ContactForm/>);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const nameField = screen.getByTestId("name-input");
    fireEvent.change(nameField, { target: { value: "Stefany" }});
  
    const emailField = screen.getByTestId("email-input");
    fireEvent.change(emailField, { target: { value: "test@gmail.com" }});

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenNthCalledWith(1, "Message cannot be empty");
    });
  })
})