import photoGet from '@/actions/photo-get';
import PhotoContent from '@/components/photo/photo-content';
import { notFound } from 'next/navigation';

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const  response = await photoGet(params.id);

  if (!response?.data) return { title: 'Fotos' };


  return {
    title: response.data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const response = await photoGet(params.id);

  if (!response?.data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={response.data} single={true} />
    </section>
  );
}
