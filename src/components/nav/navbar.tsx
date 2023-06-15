"use client";
import React, { useState } from "react";
import style from "./navbar.module.scss";
import { title, main } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "../sidebar/sidebar";
type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  function isHome() {
    if (pathname === "/") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <nav
        className={`${title.className} ${style.navigation} ${
          isHome() ? style.home : style.page
        }`}
      >
        <Link href="/">
          <div className={`${style.logo} ${main.className}`}>PdD.com</div>
        </Link>
        <ul>
          <li className={main.className} onClick={() => setOpen(true)}>
            Blog
          </li>
        </ul>
      </nav>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
