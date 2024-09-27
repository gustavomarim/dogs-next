import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function PerfilUserPage({ params }: {
  params: {
    user: string;
  };
}) {
  const response = await photosGet({ user: params.user });

  if (!response) return null;

  const { data } = response;

  return (
    <section className="container mainContainer">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
