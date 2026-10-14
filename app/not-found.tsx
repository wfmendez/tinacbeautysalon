import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-title">
      <h1>No encontramos esa página</h1>
      <div className="actions">
        <Link className="btn" href="/">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}
