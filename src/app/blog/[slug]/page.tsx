import Link from "next/link";

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <div>
      <h2>Artículo: {slug}</h2>
      <p>
        Este es el contenido del artículo con slug <b>{slug}</b>.  
        Aquí podrías mostrar texto, imágenes o cualquier información relacionada.
      </p>

      <Link href="/blog">⬅ Volver a la lista de artículos</Link>
    </div>
  );
}
