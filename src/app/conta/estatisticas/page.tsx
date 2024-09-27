import statsGet from "@/actions/stats-get";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy Loading -> Next
const ContaEstatisticas = dynamic(
  () => import("@/components/conta/conta-estatisticas"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
};

export default async function EstatisticasPage() {
  const response = await statsGet();

  if (!response?.data) return null;

  const { data } = response;

  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
