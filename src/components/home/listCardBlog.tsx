"use client";
import React, { useRef } from "react";
import style from "./homeBlog.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { title } from "@/utils/fonts";

type Props = {
  posts: any;
};

function ListCardBlog({ posts }: Props) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div ref={containerRef}>
        {isInView && (
          <motion.div
            className={style.homeBlog}
            initial="initial"
            animate="animate"
            variants={containerVariants}
          >
            {posts.items?.map((post: any, index: number) => {
              console.log("slugfield", post);

              return (
                <motion.div
                  variants={childVariants}
                  className={style.boxCard}
                  key={index}
                >
                  <div className={style.front}>
                    <Image src="/img/cardblog.webp" alt="" fill />
                  </div>
                  <div className={style.back}>
                    {/*   <Image src="/img/cardblog.webp" alt="" fill />
                                   <Link
                      href={{
                        pathname: `/blog/${post.fields.slug.it}`,
                      }}
                    > */}
                    <h3 className={title.className}>{post.fields.title.it}</h3>
                    {/*  </Link>  */}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default ListCardBlog;
