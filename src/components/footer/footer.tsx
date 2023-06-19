"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import style from "./footer.module.scss";

import Link from "next/link";
import { getBlogPosts } from "@/utils/data";

type Props = {};

function Footer({}: Props) {
  const [data, setData] = React.useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogPosts();
      if (data) {
        setData(data);
      }
    };

    fetchData();
  }, []);
  const slugify = require("slugify");
  const pathname = usePathname();
  console.log("data", data);
  function isHome() {
    if (pathname === "/") {
      return true;
    } else {
      return false;
    }
  }
  return (
    <footer className={`${style.footer} ${!isHome() && style.page}`}>
      <div className={style.innerWrapper}>
        <div className={style.left}>
          <h3>Paolo de domini</h3>
          <p>Digital Design & Frontend</p>
          <p>Firenze</p>
          <p>tel: 3205546397</p>
          <p>mail: paolodedomini@gmail.com</p>
          <a href="/img/resume.pdf">Resume</a>
        </div>
        <div className={style.right}>
          <h3>Ultime dal Blog</h3>
          <ul>
            {data.items?.map((post: any, index: number) => {
              if (index >= 3) {
                return;
              }
              return (
                <li key={post.sys.id}>
                  <Link href={`/blog/${post.fields.slug}`}>
                    <h3>{post.fields.title}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={style.credits}>
            made with <span>❤</span> and{" "}
            <Link href="https://nextjs.org/" target="_blank">
              NEXT.js
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
