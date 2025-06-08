/**
 * Build a contact form which submits user feedback and contact details to a back end API.
 * 
 * Requirements:
 * The form should contain the following elements:
 *   Name field.
 *   Email field.
 *   Message field. Since the message can be long, a <textarea> will be more suitable.
 *   Submit button
 *     Contains the text "Send".
 *     Clicking on the submit button submits the form.
 * The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
 * There is no need to do any client-side validation on the fields. Validation will be done on the server side.
 * 
 * Submission API:
 * Upon submission, POST the form data to https://questions.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.
 * If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!
 * 
 */
import React from 'react';
import submitForm from './submitForm';
import './ContactForm.scss';

function ContactForm() {
  return (
    <form
      onSubmit={submitForm}
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="POST"
    >
      <label htmlFor="name">Name</label>
      <input
        data-testid="name-input"
        id="name"
        name="name"
        type="text"
      />

      <label htmlFor="email">Email</label>
      <input
        data-testid="email-input"
        id="email"
        name="email"
        type="email"
      />

      <label htmlFor="message">Message</label>
      <textarea
        data-testid="message-textarea"
        id="message"
        name="message"
      />

      <button 
        data-testid="submit-button" 
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
