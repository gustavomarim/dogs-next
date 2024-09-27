"use client";

import passwordLost from "@/actions/password-lost";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();
  const buttonText = pending ? "Enviando..." : "Enviar Email";

  return <Button disabled={pending}>{buttonText}</Button>;
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          type="text"
          label="Email / Usuário"
          name="login"
        />
        <input
          type="hidden"
          value={url}
          name="url"
        />
        <ErrorMessage error={state.error} />
        {state.ok
          ? <p style={{ color: "#4c1" }}>Email enviado.</p>
          : <FormButton />}
      </form>
    </>
  );
}
