import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        style: {
          position: "absolute",
          bottom: "0",
          height: "100%",
        },
        fullScreen: {
          enable: false,
        },

        particles: {
          number: {
            value: 0,
            density: {
              enable: true,
              value_area: 400,
            },
          },
          color: {
            value: "#ffffff",
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          shape: {
            type: "image",
            options: {
              image: {
                src: "img/smoke.png",
                width: 256,
                height: 256,
              },
            },
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0,
              sync: false,
            },
          },
          size: {
            value: 64,
            random: { enable: true, minimumValue: 32 },
            animation: {
              enable: false,
              speed: 20,
              minimumValue: 0.1,
              sync: false,
            },
          },
          links: {
            enable: false,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          life: {
            duration: {
              value: 6,
            },
            count: 2,
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: -1,
            },
            speed: 10,
            direction: "top",
            random: false,
            straight: false,
            outModes: {
              default: "destroy",
              bottom: "out",
            },
            attract: {
              enable: true,
              distance: 300,
              rotate: {
                x: 600,
                y: 1000,
              },
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        detectRetina: true,

        emitters: {
          direction: "top",
          rate: {
            quantity: 130,
            delay: 0.05,
          },
          size: {
            width: 100,
            height: 10,
          },
          position: {
            x: 50,
            y: 110,
          },
        },
      }}
    />
  );
};
export default Particle;
