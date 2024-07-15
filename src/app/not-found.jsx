import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <div>NotFound</div>
      <Link href="/">Return</Link>
    </section>
  );
}
