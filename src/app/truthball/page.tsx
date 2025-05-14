"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import style from "./page.module.scss";
import Image from "next/image";
import backImage from "../../../public/img/truthBall/back.webp";
import { gsap, Bounce } from "gsap";
import { Draggable } from "gsap/all";
import { title } from "@/utils/fonts";
import getRisposte from "./risposte";

gsap.registerPlugin(Draggable);

type Props = {};

function TruthBall({}: Props) {
  const [risposte, setRisposte] = useState<any>(null);
  const [isActiveBall, setIsActiveBall] = useState<boolean>(false);
  const [IsFormDomandaVisible, setIsFormDomandaVisible] =
    useState<boolean>(true);
  const [reset, setReset] = useState<boolean>(false);
  const [domandaVisualizzata, setdomandaVisualizzata] = useState<string>("");
  const [playBall, setPlayBall] = useState<boolean>(false); // [playBall, setPlayBall
  const inputRef = useRef<HTMLInputElement>(null);

  function checkInput(e: any) {
    const checkValue = e.target.value;
    if (checkValue.length > 7) {
      setIsActiveBall(true);
    } else {
      setIsActiveBall(false);
    }
  }

  function submitInput() {
    setIsActiveBall(true);
    setIsFormDomandaVisible(false);
    setPlayBall(true);
    setRisposte("");
    const risposta = inputRef.current?.value;
    if (risposta) {
      setdomandaVisualizzata(risposta);
    }
  }

  function Resetter() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setdomandaVisualizzata("");

    setIsFormDomandaVisible(true);
  }

  console.log("domandaVisualizzata", domandaVisualizzata);

  useLayoutEffect(() => {
    const centrale = gsap.timeline({ paused: true });

    centrale.to(".centrale", {
      rotate: 360 * 5,
      duration: 2,
      ease: Bounce.easeOut,
    });

    centrale.to(
      ".centrale",
      {
        filter: "blur(10px)",
        duration: 1,
      },
      "<+=.5"
    );
    centrale.to(".centrale", {
      scale: 0.5,
      opacity: 0,
    });

    centrale.to(".risposta", {
      color: "#76b9d3",
      filter: "blur(.5px)",
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: Bounce.easeOut,
    });
    centrale.to(
      ".risposta",
      {
        color: "#76b9d3",
        filter: "blur(10px)",
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: Bounce.easeOut,
      },
      ">+=2"
    );
    centrale.to(".centrale", {
      rotate: 360 * 1,
      opacity: 1,
      duration: 1,
      scale: 1,
      filter: "blur(0px)",
      ease: Bounce.easeOut,
    });

    Draggable.create(".ball", {
      edgeResistance: 1,
      type: "x",
      throwProps: true,
      bounds: ".wrapperBall",
      onDragStart: function () {
        const palla = gsap.to(".ball", {
          filter: "blur(1px)",
        });
      },
      onDragEnd: function () {
        const palla = gsap.to(".ball", {
          filter: "blur(0.5px)",
          x: 0,
          y: 0,
          duration: 0.5,
          ease: Bounce.easeOut,
        });

        centrale.restart();
        setRisposte(getRisposte());
        setIsFormDomandaVisible(true);
        setPlayBall(false);
        setReset(false);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${backImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={style.truthBall}
    >
      <div className={`${style.testoDomanda} testoDomanda`}>
        <span className={`${title.className}`}>{domandaVisualizzata}</span>
      </div>
      <div className={`${style.testoRisposta} testoRisposta`}>
        <span className={`${title.className}`}>{risposte?.testo}</span>
      </div>
      <div
        className={`${style.wrapperBall} wrapperBall ${
          isActiveBall ? style.active : ""
        } ${!playBall ? "" : style.play} `}
      >
        <div className="ball">
          <Image
            src="/img/truthball/palla@2x.webp"
            width={494}
            height={494}
            alt="Picture of the author"
            quality={100}
          />
          <div className={`${style.centrale} centrale`}>
            <Image
              src="/img/truthball/orsamaggiore@2x.webp"
              width={100}
              height={53}
              alt="orsamaggiore"
            />
          </div>
          <div className={`${title.className} ${style.risposta} risposta`}>
            <span>{risposte?.risp}</span>
          </div>
        </div>
      </div>
      <div
        className={`${style.domanda} ${
          !IsFormDomandaVisible ? style.notActive : ""
        } `}
      >
        <label htmlFor="testoDomanda">La tua domanda al Negromante</label>

        <input
          ref={inputRef}
          id="testoDomanda"
          name="testo-domanda"
          type="text"
          onChange={checkInput}
        />
        <button onClick={submitInput}>submit</button>
      </div>
      <button
        className={`${style.restart} ${
          reset && !IsFormDomandaVisible ? style.active : ""
        }`}
        onClick={Resetter}
      >
        Reset
      </button>
    </section>
  );
}

export default TruthBall;
