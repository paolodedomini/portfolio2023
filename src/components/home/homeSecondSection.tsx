import React from "react";
import Image from "next/image";
import style from "./homeSecondSection.module.scss";
import { title } from "@/utils/fonts";
import { BsLinkedin, BsMailbox2 } from "react-icons/bs";

type Props = {};

function HomeSecondSection({}: Props) {
  return (
    <section>
      <Image
        className={style.headerImage}
        src="/img/back3.webp"
        fill={true}
        quality={100}
        alt={""}
      />
      <Image
        className={style.simboli}
        src="/img/simboli.webp"
        fill={true}
        quality={100}
        alt={""}
      />
      <div className={style.content}>
        <div className={style.left}>
          <Image src="/img/chiave.webp" alt="" width={60} height={200} />
        </div>
        <div className={style.right}>
          <h3 className={title.className}>Contatti</h3>
          <div className={style.wrapperContatti}>
            <div className={style.contatto}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/paolo-de-domini-0430892/"
              >
                <BsLinkedin />
              </a>
            </div>
            <div className={style.contatto}>
              <a href="mailto:paolodedomini@gmail.com">
                <BsMailbox2 />
              </a>
            </div>
          </div>
        </div>
        <div className={style.left}>
          <Image src="/img/chiave.webp" alt="" width={60} height={200} />
        </div>
      </div>
    </section>
  );
}

export default HomeSecondSection;
