import React from "react";

const Popup = (props) => {
  const reloadApp = () => window.location.reload();
  return (
    <section className="popup">
      <h2>Confirm your info</h2>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.phoneNumber}</p>
      <p>{props.role}</p>
      <p>{props.message}</p>
      <button onClick={props.backBtn}>Go back </button>
      <button onClick={reloadApp}>Send </button>
    </section>
  );
};

export default Popup;
