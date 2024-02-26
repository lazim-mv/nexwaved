"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@react-hook/window-size";

const RevealAffectX = ({
  children,
  speed = 1,
  id = "reveal",
  className,
  height,
  width,
  start,
  end,
  endTop,
}) => {
  const trigger = useRef();
  const target = useRef();
  const timeline = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const x = windowWidth * speed * 0.1;
    //  here the y is the distance the element will move in px when the trigger is at the top of the viewport and the element is at the bottom of the viewport

    const setY = gsap.quickSetter(target.current, "x", "px");
    // here we create a function that will set the y position of the element, The gsap.quickSetter() method is a handy way to create a function that will set a specific property on a specific object. In this case, we want to set the y property of the target element in pixels.

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current, // this is the element that will trigger the animation
        scrub: true, // this will make the animation smooth and not jumpy when scrolling up and down the page
        start: "top bottom", // this means the animation will start when the top of the trigger element reaches the bottom of the viewport
        end: "bottom top", // this means the animation will end when the bottom of the trigger element reaches the top of the viewport
        onUpdate: (e) => {
          setY(e.progress * x);
        },
      },
    });

    return () => {
      timeline?.current?.kill(); // this will kill the animation when the component unmounts
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div
        ref={target}
        style={{
          transform: "translateY(00%)",

          height: height,
          width: width,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealAffectX;
