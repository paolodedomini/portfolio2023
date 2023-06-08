import React from "react";
import {
  getDataSinglePost,
  getDataSinglePostAssets,
  richTextToHtml,
  getBlogPosts,
} from "@/utils/data";
import Image from "next/image";
import style from "./page.module.scss";
import { title } from "@/utils/fonts";

import Link from "next/link";

type Props = {};

async function Page({ searchParams }: any) {
  const post: any = await getDataSinglePost(searchParams.id);
  const asset: any = await getDataSinglePostAssets(
    post.items[0].fields.featuredImage?.it.sys.id
  );
  const single = await getBlogPosts(searchParams.id);

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
        <h1 className={title.className}>{post.items[0].fields.title.it}</h1>
        {post.items[0].fields.externalLink && (
          <div className={style.externalLInk}>
            <Link href={post.items[0].fields.externalLink.it}>
              Articolo Originale
            </Link>
          </div>
        )}
        {single && richTextToHtml(single)}
      </div>
    </main>
  );
}

export default Page;
