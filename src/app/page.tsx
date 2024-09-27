import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function HomePage() {
  const response = await photosGet();

  return (
    <section className="container mainContainer">
      {response?.data &&
        <Feed photos={response.data} />}
    </section>
  );
}
