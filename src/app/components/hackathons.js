"use client";
import React from "react";
import styles from "./styles/hackathons.module.css";
import { motion } from "framer-motion";

const images = [
  "ii10.jpeg",
  "ii3.jpeg",
  "ii5.jpeg",
  "ii6.jpeg",
  "ii7.jpeg",
  "ii8.jpeg",
  "ii9.jpeg",
  "ii2.jpeg",
  "ii11.jpeg",
  "ii12.jpeg",
  "ii13.jpeg",
  "ii14.jpeg",
  "ii15.png",
  "ii16.jpeg",
  "ii17.jpeg",
  "ii10.jpeg",
];

const Hackathons = React.memo(() => {
  return (
    <div className={styles.main}>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        HACKATHONS
      </motion.h1>
      <motion.h4
        className={styles.subt}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        5 Times National Hackathon winner
      </motion.h4>
      <div className={styles.masonryGrid}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`${styles.masonryItem} ${styles[`item${index % 5}`]}`}
          />
        ))}
      </div>
    </div>
  );
});

export default Hackathons;
