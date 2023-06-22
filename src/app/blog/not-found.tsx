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
      <h2>Risorsa non trovata</h2>
      <h3>controlla che l&apos;indirizzo sia giusto</h3>

      <Link href="/"> Torna alla Home</Link>
    </div>
  );
}
