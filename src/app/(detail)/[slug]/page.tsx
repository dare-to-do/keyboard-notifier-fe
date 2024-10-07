export default function Detail({ params }: { params: { slug: string } }) {
  return <main>디테일 페이지 {params.slug}번</main>;
}
