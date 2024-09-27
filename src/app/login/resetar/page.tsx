import LoginResetForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha",
};

type ResetSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage(
  { searchParams }: ResetSearchParams,
) {
  return (
    <section className="animeLeft">
      <h1 className="title">Resetar</h1>
      <LoginResetForm keyToken={searchParams.key} login={searchParams.login} />
    </section>
  );
}
