import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <p>
        Copyright {props.year}. Made by{" "}
        <a href="https://github.com/laurielim/">Laurie</a>.
      </p>
    </footer>
  );
};

export default Footer;
