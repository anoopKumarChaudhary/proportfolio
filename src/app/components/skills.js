import React from "react";
import styles from "./styles/skills.module.css";
import { motion } from "framer-motion";

const Skills = React.memo(() => {
  return (
    <div className={styles.main}>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        SKILLS/LANGUAGES
      </motion.h1>
      <motion.h4
        className={styles.subt}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        A diverse skillset with advanced knowledge spanning across both design
        and development.
      </motion.h4>
      <motion.div
        className={styles.skills}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.skill}>Flutter</p>
        <p className={styles.skill}>NodeJS</p>
        <p className={styles.skill}>NextJS</p>
        <p className={styles.skill}>AI</p>
        <p className={styles.skill}>Redux</p>
        <p className={styles.skill}>ML & DL</p>{" "}
        <p className={styles.skill}>ExpressJS </p>{" "}
        <p className={styles.skill}>SpringBoot</p>{" "}
        <p className={styles.skill}>ReactJs</p>{" "}
        <p className={styles.skill}>TensorFlow</p>{" "}
        <p className={styles.skill}>RESTful API</p>{" "}
        <p className={styles.skill}>DSA</p> <p className={styles.skill}>SQL</p>
        <p className={styles.skill}>Keras</p>{" "}
        <p className={styles.skill}>SciPy</p>{" "}
        <p className={styles.skill}>MongoDB</p>{" "}
        <p className={styles.skill}>FireBase</p>{" "}
        <p className={styles.skill}>Git</p>
        <p className={styles.skill}>UI</p>
        <p className={styles.skill}>Java</p> <p className={styles.skill}>C++</p>{" "}
        <p className={styles.skill}>Dart</p>{" "}
        <p className={styles.skill}>JavaScript</p>{" "}
        <p className={styles.skill}>Python</p>
        <p className={styles.skill}>Typescript</p>
        <p className={styles.skill}>Kotlin</p>
        <p className={styles.skill}>Rust</p>
      </motion.div>
    </div>
  );
});

export default Skills;
