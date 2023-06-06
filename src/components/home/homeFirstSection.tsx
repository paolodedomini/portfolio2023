"use client";
import { useEffect, useRef, useState } from "react";
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
  AnimatePresence,
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
  const backElement = useTransform(scrollY, [3500, 4000], [1500, 800]);
  const backElementStars = useTransform(scrollY, [3000, 3500], [1000, 600]);
  const [modal, setModal] = useState(false);
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

      <motion.section
        ref={mainContent}
        className={style.firstSection}
        style={{ opacity: contentTransparency }}
      >
        <motion.div className={style.heading}>
          <h2 className={title.className}>It&apos;s a kind of magic</h2>
        </motion.div>
        <div className={style.backgroundAnimation}>
          <ul>
            <motion.li
              initial={{ rotateZ: 0 }}
              animate={{ rotateZ: isSpecInView ? 10 : 0 }}
              transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.5 }}
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
        <div className={style.content}>
          <p style={{ marginTop: 0 }}>
            Creare l&rsquo;esperienza utente di siti web, ecommerce, app...
            significa lavorare su aspetti come layout, colori, grafica e
            tipografia, applicando i principi di design e di usabilità per
            produrre prima prototipi e poi il prodotto finale.
            <br />
            Diverse figure professionali possono essere coinvolte in questo
            processo e quasi sempre è un lavoro di squadra. <br />
          </p>
          <div
            className={style.wrapperModal}
            onMouseOver={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
          >
            <strong>Quindi, no!</strong> <br />
            <AnimatePresence>
              {modal && (
                <motion.div
                  className={style.modal}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/img/200.webp"
                    alt="200"
                    width={400}
                    height={300}
                  />
                </motion.div>
              )}
            </AnimatePresence>{" "}
          </div>
          <p>
            Non è magia, però (in certi casi) è divertente (quasi) come se lo
            fosse.
          </p>

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
                  E' quello che ho studiato e praticato per anni, dal settore
                  editoriale a quello della moda per poi specializzarmi in tutto
                  ciò che riguarda il mondo del web. <br />
                  La comunicazione/progettazione visiva è quello che mi
                  appassiona di più del mio lavoro.
                  <br /> Utilizzo software adobe: Photoshop e illustrator
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
                  Arrivo nel mondo del coding dopo anni di esperienza nel campo
                  del graphic design per la necessità di essere coinvolto
                  direttamente in tutte le fasi di progetto, dal design alla
                  produzione delle varie interfacce. <br />
                  Questo approccio mi ha permesso di acquisire una visione più
                  ampia e completa del lavoro e di quello che può e
                  (soprattutto) non può essere fatto. <br />
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
