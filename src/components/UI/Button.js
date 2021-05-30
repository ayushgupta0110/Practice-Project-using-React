import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "Button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
