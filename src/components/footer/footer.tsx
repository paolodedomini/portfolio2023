"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import style from "./footer.module.scss";

import Link from "next/link";
import { getBlogDataPreview } from "@/utils/data";

type Props = {};

function Footer({}: Props) {
  const [data, setData] = React.useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.contentful.com/spaces/9srekbk2xi6w/environments/master/entries?content_type=blog&access_token=CFPAT-GBM9LPJWAuK0r_taVGPiW8tESLjVicEtD0zhiboTPTA&limit=${3}`
        ).then((res) => res.json());
        setData(response);
      } catch (error) {
        console.log("Error fetching data from Contentful:", error);
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
            {data.items?.map((post: any) => {
              const slug = slugify(post.fields.title.it);
              return (
                <li key={post.sys.id}>
                  <Link
                    href={{
                      pathname: `/blog/${slug}`,
                      query: { id: post.sys.id },
                    }}
                  >
                    <h3>{post.fields.title.it}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
