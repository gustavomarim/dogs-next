"use server";

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

const ONE_DAY_DURATION = 60 * 60 * 24;

export default async function login(_state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !password) throw new Error("Preencha os dados");
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Usuário ou Senha inválidos.");

    const data = await response.json();

    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: ONE_DAY_DURATION,
    });

    return {
      data: null,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
