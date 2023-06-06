import React from "react";

type Props = {};

async function getDataSinglePost(id: string) {
  const res = await fetch(
    `https://api.contentful.com/spaces/9srekbk2xi6w/environments/master/entries?content_type=blog&sys.id=${id}&access_token=CFPAT-GBM9LPJWAuK0r_taVGPiW8tESLjVicEtD0zhiboTPTA`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Page({ searchParams }: any) {
  const post: any = await getDataSinglePost(searchParams.id);
  console.log("data", post.items[0].fields.title.it);
  return <div>{post.items[0].fields.title.it}</div>;
}

export default Page;
