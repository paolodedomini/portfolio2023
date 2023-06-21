"use client"; // Error components must be Client Components

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="errorPage">
      <h2>Qualcosa non ha funzionato...</h2>
      <h3>controlla che l&apos;indirizzo sia giusto</h3>
      <p>{error.stack}</p>
      <Link href="/"> Torna alla Home</Link>
    </div>
  );
}
