"use client";
import { useEffect, useRef } from "react";
import style from "./homeFirstSection.module.scss";
import { title } from "@/utils/fonts";
import Image from "next/image";
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimate,
  stagger,
} from "framer-motion";

type Props = {};

function HomeFirstSection({}: Props) {
  const mainContent = useRef(null);
  const specs = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: mainContent,
    offset: ["start end", "start center"],
  });

  const contentTransparency = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const isSpecInView = useInView(specs, { once: true });
  const backElement = useTransform(scrollY, [3000, 3500], [1000, 300]);
  const backElementStars = useTransform(scrollY, [3000, 3500], [1000, 600]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        className={style.backWrapperImage}
        style={{ position: "absolute", y: backElement }}
      >
        <Image
          className={style.backContentImage}
          src="/img/back-content.webp"
          alt="back content"
          width={250}
          height={250}
          quality={100}
        />
      </motion.div>
      <motion.div
        className={style.backWrapperImageStars}
        style={{ position: "absolute", y: backElementStars }}
      >
        <Image
          className={style.backContentImageStars}
          src="/img/back-stars.webp"
          alt="back content"
          width={350}
          height={250}
          quality={100}
        />
      </motion.div>
      <div className={style.backgroundAnimation}>
        <ul>
          <motion.li
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: isSpecInView ? 10 : 0 }}
          >
            {" "}
            <Image
              className={style.tarocchi}
              src="/img/card.svg"
              alt="tarocchi"
              width={220}
              height={356}
              quality={100}
            />
          </motion.li>
          <motion.li
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: isSpecInView ? 20 : 0 }}
          >
            {" "}
            <Image
              className={style.tarocchi}
              src="/img/card.svg"
              alt="tarocchi"
              width={220}
              height={356}
              quality={100}
            />
          </motion.li>
          <motion.li
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: isSpecInView ? 30 : 0 }}
          >
            {" "}
            <Image
              className={style.tarocchi}
              src="/img/card.svg"
              alt="tarocchi"
              width={220}
              height={356}
              quality={100}
            />
          </motion.li>
          <motion.li
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: isSpecInView ? 40 : 0 }}
          >
            {" "}
            <Image
              className={style.tarocchi}
              src="/img/card.svg"
              alt="tarocchi"
              width={220}
              height={356}
              quality={100}
            />
          </motion.li>
          <motion.li
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: isSpecInView ? 50 : 0 }}
          >
            {" "}
            <Image
              className={style.tarocchi}
              src="/img/card.svg"
              alt="tarocchi"
              width={220}
              height={356}
              quality={100}
            />
          </motion.li>
        </ul>
        <Image
          className={style.tarocchi}
          src="/img/card.svg"
          alt="tarocchi"
          width={220}
          height={356}
          quality={100}
        />
      </div>
      <motion.section
        ref={mainContent}
        className={style.firstSection}
        style={{ opacity: contentTransparency }}
      >
        <motion.div className={style.heading}>
          <h2 className={title.className}>It&apos;s a kind of magic</h2>
          <span>...nope!</span>
        </motion.div>
        <div className={style.content}>
          <motion.p style={{ marginTop: 0 }}>
            Creare l&rsquo;esperienza utente di siti web, ecommerce, app...
            significa lavorare su aspetti come layout, colori, grafica e
            tipografia, applicando i principi di design e di usabilità per poi
            produrre prototipi e il prodotto finale.
            <br />
            Tante figure professionali possono essere coinvolte in questo
            processo e quasi sempre è un lavoro di squadra.
            <br />
            <strong>Quindi, no.</strong> <br />
            Non è magia, però (in certi casi) è divertente (quasi) come se lo
            fosse.
          </motion.p>
          <div
            className={`${style.specs} ${isSpecInView ? style.visible : ""}`}
            ref={specs}
          >
            <div className={style.spec}>
              <div className={style.left}>
                <Image
                  src="/img/occhio.webp"
                  alt="Estetica"
                  width={200}
                  height={200}
                />
              </div>
              <div className={style.right}>
                <h3 className={title.className}>Graphic Design</h3>
                <p>
                  Utilizzo software adobe: Photoshop e illustrator
                  principalmente.
                  <br />
                  Da anni lavoro quotidianamente con la suite Affinity: Designer
                  e Photo. Per la prototipia: Figma e Invision
                </p>
              </div>
            </div>
            <div className={style.spec}>
              <div className={style.left}>
                <Image
                  src="/img/mano.webp"
                  alt="Funzionalita"
                  width={200}
                  height={200}
                />
              </div>
              <div className={style.right}>
                <h3 className={title.className}>Coding</h3>
                <p>
                  Su Visual Studio Code scrivo in: Html, css, scss, js (React,
                  Next).
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HomeFirstSection;
