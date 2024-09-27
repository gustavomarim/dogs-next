"use client";

import photoPost from "@/actions/photo-post";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./conta-photo-post.module.css";

function FormButton() {
  const { pending } = useFormStatus();
  const buttonText = pending ? "Enviando..." : "Enviar";

  return <Button disabled={pending}>{buttonText}</Button>;
}

export default function ContaPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = useState("");

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) setImg(URL.createObjectURL(target.files[0]));
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input
          label="Nome"
          type="text"
          name="nome"
        />
        <Input
          label="Peso"
          type="number"
          name="peso"
        />
        <Input
          label="Idade"
          type="number"
          name="idade"
        />
        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img}')` }}
        >
        </div>
      </div>
    </section>
  );
}
