import React from "react";
import Share from "@/components/share/share";
import {
  getDataSinglePost,
  getDataSinglePostAssets,
  richTextToHtml,
  getBlogPosts,
  getBlogPostAssets,
} from "@/utils/data";
import Image from "next/image";
import style from "./page.module.scss";
import { title } from "@/utils/fonts";

import Link from "next/link";

export const metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
  },
};

type Props = {};

async function Page({ params }: any) {
  const posts = await getBlogPosts();
  if (!posts) return null;
  const post = posts.items.find((item: any) => {
    return item.fields.slug === params.blogPageId;
  });
  if (!post) return null;
  const asset: any =
    post.fields.featuredImage &&
    (await getDataSinglePostAssets(post.fields.featuredImage.sys.id));
  console.log("single", posts);

  return (
    <main className="page">
      <div className={style.wrapperImage}>
        {/*       {asset ? (
          <Image src={`https:${asset.fields.file.it.url}`} alt="" fill />
        ) : (
          <Image src="/img/backGeneralPage.webp" quality={100} alt="" fill />
        )} */}
      </div>
      <div className={style.wrapperContent}>
        <h1 className={title.className}>{post.fields.title}</h1>
        <Share />
        {post.fields.externalLink && (
          <div className={style.externalLInk}>
            <Link href={post.fields.externalLink}>Articolo Originale</Link>
          </div>
        )}
        {post && richTextToHtml(post)}
      </div>
    </main>
  );
}

export default Page;
