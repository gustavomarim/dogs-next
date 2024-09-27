"use client";

import passwordReset from "@/actions/password-reset";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./login-form.module.css";

type LoginResetFormProps = {
  keyToken: string;
  login: string;
};

function FormButton() {
  const { pending } = useFormStatus();
  const buttonText = pending ? "Enviando..." : "Enviar Email";

  return <Button disabled={pending}>{buttonText}</Button>;
}

export default function LoginResetForm(
  { keyToken, login }: LoginResetFormProps,
) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          type="password"
          name="password"
          label="Nova Senha"
        />
        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={keyToken} />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
