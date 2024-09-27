import React from "react";

import ErrorMessage from "../helper/error-message";
import styles from "./input.module.css";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>{label}</label>
      <input id={props.name} {...props} className={styles.input} />
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
