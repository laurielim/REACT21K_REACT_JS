import React from "react";

const Form = (props) => {
  return (
    <section className="form-container">
      <form id="form" onSubmit={props.submit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={props.input}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Jane"
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={props.input}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Smith"
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          onChange={props.input}
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          pattern="\+?\s*([0-9][\s-]*){1,15}$"
          placeholder="+358 9 xxx xxx"
          required
        />

        <label htmlFor="role">Role:</label>

        <select
          onChange={props.input}
          name="role"
          id="role"
          form="form"
          required
        >
          <option value="">None</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          onChange={props.input}
          name="message"
          id="message"
          placeholder="Write a message"
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
