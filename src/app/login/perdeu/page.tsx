import LoginPerdeuForm from "@/components/login/login-perdeu-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere a sua senha",
};

export default async function PerdeuPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a Senha?</h1>
      <LoginPerdeuForm />
    </section>
  );
}
