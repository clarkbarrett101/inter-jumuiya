import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
export default function AnimatedPhoto() {
  const foregroundRef = useRef();
  const midgroundRef = useRef();
  const backgroundRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(Math.min(window.scrollY, 6000));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    getScroll();
  }, [scrollY]);
  function getScroll(mod = 1) {
    return scrollY * mod;
  }
  return (
    <div
      style={{
        height: 10000,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgb(32, 32, 128)",
        zIndex: -1,
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 100 + getScroll(0.015),
          right: 0,
          width: "50%",
          fontSize: 32,
          textAlign: "left",
        }}
      >
        International Jumuiya Talk is a transformative initiative meticulously
        crafted to bridge the gap between real-life experiences and young
        aspirations. With a profound understanding of the hurdles life can
        present, this program brings forth remarkable individuals who have not
        only overcome challenges but have thrived amidst adversity. These
        speakers, who embody resilience and perseverance, share their authentic
        stories of triumph to illuminate the path towards success for our
        students.
      </div>
      <div className="foreground" ref={foregroundRef}>
        <img
          src="./animatedPhotoForeground.png"
          alt="Foreground"
          style={{
            width: "43%",
            position: "fixed",
            top: 100 + getScroll(0.03),
            left: "5%",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "fixed",
            top: 500 + getScroll(0.03),
            left: "5%",
            width: "43%",
            height: 400,
            zIndex: 2,
            backgroundColor: "rgb(32, 32, 128)",
          }}
        />
      </div>
      <div className="midground" ref={midgroundRef}>
        <img
          src="./animatedPhotoMiddle.png"
          alt="Midground"
          style={{
            width: "18%",
            position: "fixed",
            top: 100 + getScroll(0.015),
            left: "15%",
            zIndex: 0,
          }}
        />
      </div>
      <div className="background" ref={backgroundRef}>
        <img
          src="./Background.png"
          alt="Background"
          style={{
            width: "43%",

            position: "fixed",
            top: 100,
            left: "5%",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
