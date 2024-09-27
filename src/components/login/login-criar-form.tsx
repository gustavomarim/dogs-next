"use client";

import userPost from "@/actions/user-post";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();
  const buttonText = pending ? "Cadastrando..." : "Cadastrar";

  return <Button disabled={pending}>{buttonText}</Button>;
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          type="text"
          label="Usuário"
          name="username"
        />
        <Input
          type="email"
          label="Email"
          name="email"
        />
        <Input
          type="password"
          label="Senha"
          name="password"
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
