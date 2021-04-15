import React from "react";

const View = (props) => {
  return (
    <section className="view-container">
      <h2>This is your input:</h2>
      <div className="copybook">
        <p>
          First Name: <span className="handwritting">{props.firstName}</span>
        </p>
        <p>
          Last Name: <span className="handwritting">{props.lastName}</span>
        </p>
        <p>
          Phone Number:{" "}
          <span className="handwritting">{props.phoneNumber}</span>
        </p>
        <p>
          Role: <span className="handwritting">{props.role}</span>
        </p>
        <p>
          Message: <span className="handwritting">{props.message}</span>
        </p>
      </div>
    </section>
  );
};

export default View;
