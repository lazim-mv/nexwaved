"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@react-hook/window-size"; // Import useWindowSize hook

const RevealComponent = ({ children, speed = 1, id = "reveal", className }) => {
  const trigger = useRef();
  const target = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    const y = windowHeight * speed * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => {
          setY((1 - e.progress) * y);
        },
      },
    });

    return () => {
      timeline?.kill(); 
    };
  }, [id, speed, windowHeight]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target} style={{ transform: "translateY(100%)" }}>
        {children}
      </div>
    </div>
  );
};

export default RevealComponent;
