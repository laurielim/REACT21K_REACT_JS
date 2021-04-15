import React from "react";

const Form = (props) => {
  return (
    <section className="form-container">
      <form id="form">
        <div className="user-input">
          <label htmlFor="firstName">First Name:</label>
          <input
            onChange={props.input}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="user-input">
          <label htmlFor="lastName">Last Name:</label>
          <input
            onChange={props.input}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="user-input">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            onChange={props.input}
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            pattern="\+?\s*([0-9][\s-]*){1,15}$"
          />
        </div>
        <div className="user-input">
          <label htmlFor="role">Role:</label>

          <select onChange={props.input} name="role" id="role" form="form">
            <option value="">None</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="user-input">
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={props.input}
            name="message"
            id="message"
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default Form;
