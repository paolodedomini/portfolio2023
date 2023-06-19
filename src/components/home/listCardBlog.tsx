"use client";
import React, { useRef } from "react";
import style from "./homeBlog.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { title } from "@/utils/fonts";
import { log } from "console";

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
  console.log(isInView, "isInView");

  return (
    <>
      <div ref={containerRef}>
        {isInView && (
          <motion.div
            className={style.homeBlog}
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {posts.items?.map((post: any, index: number) => {
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
                    <Image src="/img/cardblog.webp" alt="" fill />
                    <Link href={`/blog/${post.fields.slug}`}>
                      <h3 className={title.className}>{post.fields.title}</h3>
                    </Link>
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
