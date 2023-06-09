"use client";
import React from "react";
import style from "./navbar.module.scss";
import { title, main } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();

  function isHome() {
    if (pathname === "/") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <nav
      className={`${title.className} ${style.navigation} ${
        isHome() ? style.home : style.page
      }`}
    >
      <Link href="/">
        <div className={`${style.logo} ${main.className}`}>PdD.com</div>
      </Link>
      <ul>
        <li className={main.className}>
          <Link href="#">Blog </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
