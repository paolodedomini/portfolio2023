"use client";
import React, { useState } from "react";
import NewWindow from "react-new-window";
import { usePathname } from "next/navigation";
import style from "./share.module.scss";
import { BsFacebook, BsTelegram, BsLinkedin } from "react-icons/bs";
export default function App() {
  const [openWindow, setOpenWindow] = useState(""); // false
  const pagePath = usePathname();
  console.log("pagePath", pagePath);

  const socialShare = [
    {
      url: `https://www.linkedin.com/shareArticle?url=https://paolodedomini.com${pagePath}&mini=true`,
      label: "Linkedin",
    },
    {
      url: `https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F${pagePath}&quote=GitHub&_rdc=1&_rdr¡`,
      label: "Facebook",
    },

    {
      url: `https://telegram.me/share/?url=https://paolodedomini.com${pagePath}&text=GitHub`,
      label: "Telegram",
    },
  ];

  return (
    <div style={{ marginBottom: "2rem" }}>
      <div className={style.shareContainer}>
        <div className={style.title}>Share on</div>

        {socialShare.map((v) => (
          <button
            className={style.button}
            key={v.label}
            onClick={() => {
              v.label === "Email"
                ? (window.location.href = v.url)
                : setOpenWindow(v.url);
            }}
          >
            {v.label === "Facebook" ? (
              <BsFacebook />
            ) : v.label === "Telegram" ? (
              <BsTelegram />
            ) : (
              <BsLinkedin />
            )}
          </button>
        ))}

        {openWindow && (
          <NewWindow
            url={openWindow}
            features={{
              width: 566,
              height: 594,
            }}
            copyStyles={false}
            center="screen" // DEFAULT = parent
            onUnload={() => {
              console.log("onUnload");
              setOpenWindow("");
            }}
            onBlock={() => {
              console.log("onBlock");
              setOpenWindow("");
            }}
            onOpen={() => {
              console.log("onOpen");
            }}
          />
        )}
        {/* {openWindow && (
        <div className="ratio ratio-16x9">
          <iframe src={openWindow} title="YouTube video" allowFullscreen />
        </div>
      )} */}
      </div>
      <hr />
    </div>
  );
}
