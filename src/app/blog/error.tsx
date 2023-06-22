"use client"; // Error components must be Client Components

import Link from "next/link";
import Lottie from "lottie-react";
import errorAnimation from "@/animations/error.json";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="errorPage">
      <Lottie className="errorAnimation" animationData={errorAnimation} />
      <h2>Qualcosa non ha funzionato...</h2>
      <h3>controlla che l&apos;indirizzo sia giusto</h3>
      <p>{error.stack}</p>
      <Link href="/"> Torna alla Home</Link>
    </div>
  );
}
