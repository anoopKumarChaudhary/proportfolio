import React from "react";
import styles from "./styles/skills.module.css";
import { motion } from "framer-motion";

const Skills = React.memo(() => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  };

  // Generate a random color
  const randomColors = Array.from({ length: 28 }, () => getRandomColor());
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
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className={styles.skill} style={{ borderColor: randomColors[0] }}>
          Flutter
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[1] }}>
          NodeJS
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[2] }}>
          NextJS
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[3] }}>
          AI
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[4] }}>
          Redux
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[5] }}>
          ML & DL
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[6] }}>
          ExpressJS{" "}
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[7] }}>
          SpringBoot
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[8] }}>
          ReactJs
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[9] }}>
          TensorFlow
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[10] }}>
          RESTful API
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[11] }}>
          {" "}
          DSA
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[12] }}>
          SQL
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[13] }}>
          Keras
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[14] }}>
          SciPy
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[15] }}>
          MongoDB
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[16] }}>
          FireBase
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[17] }}>
          Git
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[18] }}>
          UI
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[19] }}>
          Java
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[20] }}>
          C++
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[21] }}>
          Dart
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[22] }}>
          JavaScript
        </p>{" "}
        <p className={styles.skill} style={{ borderColor: randomColors[23] }}>
          Python
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[24] }}>
          Typescript
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[25] }}>
          Kotlin
        </p>
        <p className={styles.skill} style={{ borderColor: randomColors[26] }}>
          Rust
        </p>
      </motion.div>
    </div>
  );
});

export default Skills;
