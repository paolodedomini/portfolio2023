import { getBlogDataPreview } from "@/utils/data";
import style from "./homeBlog.module.scss";
import Image from "next/image";
import Link from "next/link";
import { title } from "@/utils/fonts";
type Props = {};

async function HomeBlog({}: Props) {
  const posts: any = await getBlogDataPreview(3);
  const slugify = require("slugify");
  console.log("posts", posts);

  return (
    <section className={style.blog}>
      <h2 className={title.className}>Articoli dal Blog</h2>
      <div className={style.homeBlog}>
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
                  href={{
                    pathname: `/blog/${slug}`,
                    query: { id: post.sys.id },
                  }}
                >
                  <h3>{post.fields.title.it}</h3>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeBlog;
