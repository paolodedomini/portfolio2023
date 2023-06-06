"use client";
import { useGetBlogPostsPreview } from "@/utils/data";
import style from "./homeBlog.module.scss";
import Image from "next/image";
import Link from "next/link";
type Props = {};
var slugify = require("slugify");

function HomeBlog({}: Props) {
  const posts: any = useGetBlogPostsPreview(4);

  console.log("posts", posts.items);

  return (
    <section className={style.homeBlog}>
      {posts.items?.map((post: any) => {
        const slug = slugify(post.fields.title.it);
        return (
          <div className={style.boxCard} key={post.sys.id}>
            <div className={style.front}>
              <Image src="/img/cardblog.webp" alt="" fill />
            </div>
            <div className={style.back}>
              <Image src="/img/cardblog.webp" alt="" fill />
              <Link
                href={{ pathname: `/blog/${slug}`, query: { id: post.sys.id } }}
              >
                <h3>{post.fields.title.it}</h3>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HomeBlog;
