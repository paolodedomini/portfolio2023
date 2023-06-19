import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <main
      style={{
        width: "100%",
        minHeight: 400,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Loading...</h1>
    </main>
  );
}

export default Loading;
