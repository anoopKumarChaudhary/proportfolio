"use client";
import React from "react";
import styles from "./styles/home.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const titles = ["Coder", "Developer", "Engineer", "Freelancer"];

const HomePage = React.memo(() => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.div1}>
        <div>
          <motion.h3
            className={styles.t1}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hii I Am{" "}
          </motion.h3>
          <motion.h3
            className={styles.t2}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Anoop Chaudhary{" "}
          </motion.h3>
          <motion.h2
            key={titles[index]}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.tags}
          >
            {titles[index]}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.txt}
          >
            Work in various states of design and development, from side
            projects, to in-flight product design and development.
          </motion.p>
        </div>
      </div>
      <div className={styles.div2}>
        <motion.div
          className={styles.div3}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img src="/img2.png" className={styles.img}></img> */}
        </motion.div>
      </div>
    </div>
  );
});

export default HomePage;
