"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import style from "./homeHeader.module.scss";
import { title } from "@/utils/fonts";

import { useTransform, useScroll, motion } from "framer-motion";

type Props = {};

function HomeHeader({}: Props) {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 800], [270, 150]);
  let opacityParagraph = useTransform(scrollY, [50, 200], [0, 1]);
  let bright = useTransform(scrollY, (v) => {
    if (v < 882) {
      return `brightness(${1600 - v * 1}%) saturate(${20}%)`;
    }
  });

  let blur = useTransform(scrollY, (v) => {
    if (v > 2000 && v < 3000) {
      return `blur(${v / 150 - 13}px)`;
    } else if (v < 1600) {
      return `blur(${0}px)`;
    }
  });

  let rotateMano = useTransform(scrollY, [0, 800], [0, 180]);
  let yMano = useTransform(scrollY, [0, 800], [0, 350]);
  let yWrapperEstetica = useTransform(scrollY, [0, 800], [200, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.wrapperScroll}>
      <header className={style.mainHeader}>
        <Image
          className={style.spinner}
          src="/img/spinner.webp"
          alt="Eberhard Grossgasteiger"
          width={1200}
          height={1200}
          quality={100}
        />
        <Image
          className={style.headerImage}
          src="/img/eberhard-grossgasteiger.webp"
          alt="Eberhard Grossgasteiger"
          fill={true}
          quality={100}
        />
        <motion.section className={style.firstHeadSection}>
          <motion.div
            className={style.wrapperEstetica}
            style={{ y: yWrapperEstetica }}
          >
            <motion.div
              className={style.wrapperImmagini}
              style={{ filter: bright }}
            >
              <motion.div style={{ position: "relative", filter: blur }}>
                <Image
                  className={style.occhio}
                  src="/img/occhio.webp"
                  alt="Estetica"
                  width={350}
                  height={350}
                />
                <Image
                  className={style.circolo_occhio}
                  src="/img/circolo_occhio.webp"
                  alt="Estetica"
                  width={320}
                  height={320}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className={`${style.wrapperImmagini}`}
              style={{ filter: bright, y: yMano, rotate: rotateMano }}
            >
              <motion.div style={{ position: "relative", filter: blur }}>
                <Image
                  className={style.occhio}
                  src="/img/mano.webp"
                  alt="Estetica"
                  width={350}
                  height={350}
                />
                <Image
                  className={style.circolo_occhio}
                  src="/img/circolo_occhio.webp"
                  alt="Estetica"
                  width={320}
                  height={320}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className={style.text} style={{ y: y }}>
            <h2 className={title.className}>Digital Design & Frontend</h2>
            <motion.p style={{ opacity: opacityParagraph }}>
              Progetto e realizzo funzionalità ed estetica di siti e
              applicazioni web. <br />
              Il mio lavoro consiste nel creare "oggetti" digitali facilmente
              utilizzabili dagli utenti nel rispetto dei requisiti e degli
              obbiettivi di progetto.
            </motion.p>
          </motion.div>
        </motion.section>
      </header>
    </div>
  );
}

export default HomeHeader;
