import React from "react";
import styles from "./styles/footer.module.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = React.memo(() => {
  return (
    <div className={styles.main}>
      <div className={styles.main1}>
        {" "}
        <motion.div
          className={styles.div1}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>ANOOP</h2>
          <h2>KUMAR</h2>
          <h2>CHAUDHARY</h2>
        </motion.div>
        <motion.div
          className={styles.div2}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3>Contact</h3>
          <h4>anupchaudhary1021@gmail.com</h4>
          <h4>anoop.21bce7994@vitapstudent.ac.in</h4>
          <h4>6396937375</h4>
        </motion.div>
        <motion.div
          className={styles.div3}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3>Information</h3>
          <h4>Skills</h4>
          <h4>Hackathons</h4>
          <h4>Experience</h4>
          <h4>Services</h4>
        </motion.div>{" "}
      </div>
      <motion.div
        className={styles.icons}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1 }}
      >
        <FaInstagram className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaLinkedinIn className={styles.icon} />
        <FaGithub className={styles.icon} />
      </motion.div>
      <div className={styles.divi}></div>
      <h5>Contact anytime for projects</h5>
    </div>
  );
});

export default Footer;
