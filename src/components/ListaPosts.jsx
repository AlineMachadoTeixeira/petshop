import Link from "next/link";

export default function ListaPosts({ post }) {
  return (
    <article key={post.id}>
      <Link href="">
        <h3> {post.titulo} </h3>
        <p> {post.subtitulo} </p>
      </Link>
    </article>
  );
}
