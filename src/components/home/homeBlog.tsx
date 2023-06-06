"use client";
import { useGetBlogPostsPreview } from "@/utils/data";
import style from "./homeBlog.module.scss";
import Image from "next/image";
type Props = {};

function HomeBlog({}: Props) {
  const posts: any = useGetBlogPostsPreview(4);

  console.log("posts", posts.items);

  return (
    <section className={style.homeBlog}>
      {posts.items?.map((post: any) => {
        return (
          <div className={style.boxCard} key={post.sys.id}>
            <div className={style.front}>
              <Image src="/img/cardblog.webp" alt="" fill />
            </div>
            <div className={style.back}>
              <Image src="/img/cardblog.webp" alt="" fill />
              <h3>{post.fields.title.it}</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HomeBlog;
