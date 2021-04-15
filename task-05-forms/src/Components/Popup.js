import React from "react";

const Popup = (props) => {
  const reloadApp = () => window.location.reload();
  return (
    <div className="overlay">
      <section className="popup-container">
        <h2>Confirm Your Details</h2>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>

        <button onClick={reloadApp} className="submit-btn">
          Send{" "}
        </button>
        <button onClick={props.backBtn} className="cancel-btn">
          Go back{" "}
        </button>
      </section>
    </div>
  );
};

export default Popup;
