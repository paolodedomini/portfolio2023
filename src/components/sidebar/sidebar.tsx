"use client";
import { getBlogPosts } from "@/utils/data";
import React, { use, useEffect, useState } from "react";
import { title } from "@/utils/fonts";
import Link from "next/link";
import style from "./sidebar.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { BsX } from "react-icons/bs";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ open, setOpen }: Props) {
  const pathname = usePathname();
  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    setOpen(false);
    const posts = async () => {
      const posts = await getBlogPosts();
      if (posts) {
        setPosts(posts);
      }
    };
    posts();
  }, [pathname]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ left: "-100vw" }}
            animate={{ left: 0 }}
            exit={{ left: "-100vw" }}
            className={style.sidebar}
          >
            <div className={style.mainwrapper}>
              <div className={style.wrapperHead}>
                <div
                  className={style.close}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <BsX />
                </div>
              </div>
              <h3 className={title.className}>Blog</h3>
              <p>
                (Tutto quello che mi passa per la testa sul mondo del design e
                dello sviluppo frontend.)
              </p>
              <ul>
                {posts.items?.map((post: any) => {
                  return (
                    <li key={post.sys.id}>
                      <Link href={`/blog/${post.fields.slug}`}>
                        <div>{post.fields.title}</div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
