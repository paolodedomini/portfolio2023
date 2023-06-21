import React from "react";
import Share from "@/components/share/share";
import {
  getDataSinglePostAssets,
  richTextToHtml,
  getBlogPosts,
} from "@/utils/data";
import Image from "next/image";
import style from "./page.module.scss";
import { title } from "@/utils/fonts";

import Link from "next/link";
type Props = {};

async function getData(params: any) {
  const posts = await getBlogPosts();
  if (!posts) return null;
  const post: any = posts.items.find((item: any) => {
    return item.fields.slug === params.blogPageId;
  });
  const asset: any =
    post?.fields.featuredImage &&
    (await getDataSinglePostAssets(post.fields.featuredImage.sys.id));
  return { post, asset };
}

export async function generateMetadata({ params }: any) {
  const data = await getData(params);
  if (!data) return null;
  const { post, asset } = data;
  return {
    title: `paolodedomini-Blog ${post?.fields.title}`,
    openGraph: {
      title: post?.fields.title,
      images: [
        asset
          ? `https:${asset.fields.file.it.url}`
          : "/img/backGeneralPage.webp",
      ],
    },
  };
}

async function Page({ params }: any) {
  const data = await getData(params);
  if (!data) return <h1>no data</h1>;
  const { post, asset } = data;

  return (
    <main className="page">
      <div className={style.wrapperImage}>
        {asset ? (
          <Image src={`https:${asset.fields.file.it.url}`} alt="" fill />
        ) : (
          <Image src="/img/backGeneralPage.webp" quality={100} alt="" fill />
        )}
      </div>
      <div className={style.wrapperContent}>
        <h1 className={title.className}>{post.fields.title}</h1>
        <Share />
        {post.fields.externalLink && (
          <div className={style.externalLInk}>
            <Link href={post.fields.externalLink}>Articolo Originale</Link>
          </div>
        )}
        {richTextToHtml(post)}
      </div>
    </main>
  );
}

export default Page;
