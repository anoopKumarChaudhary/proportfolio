import React from "react";
import styles from "./styles/footer.module.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = React.memo(() => {
  return (
    <div className={styles.main}>
      <div className={styles.main1}>
        {" "}
        <div className={styles.div1}>
          <h2>ANOOP</h2>
          <h2>KUMAR</h2>
          <h2>CHAUDHARY</h2>
        </div>
        <div className={styles.div2}>
          <h3>Contact</h3>
          <h4>anupchaudhary1021@gmail.com</h4>
          <h4>anoop.21bce7994@vitapstudent.ac.in</h4>
          <h4>6396937375</h4>
        </div>
        <div className={styles.div3}>
          <h3>Information</h3>
          <h4>Skills</h4>
          <h4>Hackathons</h4>
          <h4>Experience</h4>
          <h4>Services</h4>
        </div>{" "}
      </div>
      <div className={styles.icons}>
        <FaInstagram className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaLinkedinIn className={styles.icon} />
        <FaGithub className={styles.icon} />
      </div>
      <div className={styles.divi}></div>
      <h5>Contact anytime for projects</h5>
    </div>
  );
});

export default Footer;
