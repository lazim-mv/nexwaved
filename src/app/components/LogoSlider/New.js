"use client";
import React, { useEffect } from "react";
import styles from "./new.module.css";
import { heroData } from "@/app/Content/content";

const New = () => {
  const brandLogos = heroData.brandLogos;

  let scrollers;
  useEffect(() => {
    scrollers = document.querySelectorAll(".brands_scroller__Ud4hH");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  });

  // If a user hasn't opted in for recuded motion, then we add the animation

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(
        ".brands_scrollerInner__PJr__"
      );

      // Remove existing cloned elements before appending new ones
      scrollerInner.querySelectorAll("[aria-hidden=true]").forEach((item) => {
        item.remove();
      });

      // Make a copy of the original content
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate and append the items
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <div className={styles.container}>
      <div class={styles.scroller} data-direction="left" data-speed="slow">
        <div class={styles.scrollerInner}>
          {brandLogos.map((data, index) => (
            <img key={index} src={data} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;