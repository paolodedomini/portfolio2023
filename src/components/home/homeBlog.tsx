import { getBlogDataPreview } from "@/utils/data";
import style from "./homeBlog.module.scss";
import { title } from "@/utils/fonts";
import ListCardBlog from "./listCardBlog";

type Props = {};

async function HomeBlog({}: Props) {
  const posts: any = await getBlogDataPreview(3);

  return (
    <>
      {" "}
      {posts ? (
        <section className={style.blog}>
          <h2 className={title.className}>Articoli dal Blog</h2>
          {/*  <ListCardBlog posts={posts} /> */}
        </section>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default HomeBlog;
