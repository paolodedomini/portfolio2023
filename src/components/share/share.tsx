"use client";
import React, { useState } from "react";
import NewWindow from "react-new-window";
import { usePathname } from "next/navigation";
export default function App() {
  const [openWindow, setOpenWindow] = useState(""); // false
  const pagePath = usePathname();
  console.log("pagePath", pagePath);

  const socialShare = [
    {
      url: `https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F${pagePath}&quote=GitHub&_rdc=1&_rdr¡`,
      label: "Facebook",
    },
    {
      url: "https://twitter.com/intent/tweet?url=http%3A%2F%2Fgithub.com&text=GitHub",
      label: "Twitter",
    },
    {
      url: "https://web.whatsapp.com/send?text=GitHub%3A%3A%20http%3A%2F%2Fgithub.com",
      label: "WhatsApp",
    },
    {
      url: "https://telegram.me/share/?url=http%3A%2F%2Fgithub.com&text=GitHub",
      label: "Telegram",
    },
    {
      url: `https://www.linkedin.com/shareArticle?url=https://pddwebsite2023.netlify.app${pagePath}&mini=true`,
      label: "Linkedin",
    },
    {
      url: "https://social-plugins.line.me/lineit/share?url=http%3A%2F%2Fgithub.com&text=GitHub",
      label: "Line",
    },
    {
      url: "https://www.tumblr.com/widgets/share/tool?canonicalUrl=http%3A%2F%2Fgithub.com&title=GitHub&tags=&posttype=link",
      label: "tumblr",
    },
    {
      url: "https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fnygardk.github.io%2Freact-share%2F&media=http%3A%2F%2Fnygardk.github.io%2Freact-share%2F%2Faa5c8c4a6697b8f9241498d7d2fb05ab.png",
      label: "pinterest",
    },
    {
      url: "mailto:m.husein27@gmail.com?subject=Big%20News&body=Body-goes-here",
      label: "Email",
    },
  ];

  return (
    <div className="container-fluid">
      <button>Share API</button> <hr />
      {/* <FacebookShareButton url={window.location.href} /> */}
      {socialShare.map((v) => (
        <button
          key={v.label}
          className="me-1 mb-1"
          onClick={() => {
            v.label === "Email"
              ? (window.location.href = v.url)
              : setOpenWindow(v.url);
          }}
        >
          Share {v.label}
        </button>
      ))}
      <hr />
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
  );
}
