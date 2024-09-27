"use client";

import login from "@/actions/login";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();
  const buttonText = pending ? "Enviando.." : "Entrar";

  return <Button disabled={pending}>{buttonText}</Button>;
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
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
          placeholder="Usuário"
        />
        <Input
          type="password"
          label="Senha"
          name="password"
          placeholder="Senha"
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <Link href="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>
          Cadastre-se
        </h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href="/login/criar" className="button">Cadastro</Link>
      </div>
    </>
  );
}
