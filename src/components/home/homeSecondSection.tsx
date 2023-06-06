import React from "react";
import Image from "next/image";
import style from "./homeSecondSection.module.scss";
import { title } from "@/utils/fonts";
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
      <div className={style.content}>
        <div className={style.left}>
          <Image src="/img/chiave.webp" alt="" width={60} height={200} />
        </div>
        <div className={style.right}>
          <h3 className={title.className}>Chiedi al Negromante</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            totam. Earum molestias, porro, velit ex eos architecto placeat illum
            debitis magni suscipit pariatur sapiente laudantium laboriosam.
            Optio vitae nulla dolorem?
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeSecondSection;
