import React from "react";
import styles from "./styles/services.module.css";
import { motion } from "framer-motion";

const Service = React.memo(() => {
  return (
    <div
      className={styles.outer_div}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.title}>
        <h1>SERVICES</h1>
      </div>
      <p className={styles.headline}>
        Transforming Ideas into Reality with Expert Software Development
        Services
      </p>
      {/* <p className={styles.headline2}>
        Offer a wide range of software development and design services to meet
        all your digital needs. Our expert team is dedicated to delivering
        high-quality solutions tailored to your specific requirements. Heres an
        overview of the services we provide:
      </p> */}
      <div className={styles.service_list}>
        <ul className={styles.list}>
          <li className={styles.l1}>Web Development</li>
          <motion.p
            className={styles.head}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            We create responsive, scalable, and visually appealing websites
            using the latest technologies and frameworks. Our web development
            services ensure a robust online presence that enhances user
            engagement and drives business growth.
          </motion.p>
          <div className={styles.spacer}></div>
          <li className={styles.l1}>Android and iOS Development</li>
          <motion.p
            className={styles.head}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {" "}
            Our mobile development team specializes in creating feature-rich and
            user-friendly applications for both Android and iOS platforms. We
            focus on performance, security, and seamless user experience to
            ensure your app stands out in the competitive market.
          </motion.p>
          <div className={styles.spacer}></div>
          <li className={styles.l1}>Backend Development</li>
          <motion.p
            className={styles.head}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            {" "}
            We provide robust backend development services, building secure and
            scalable server-side applications. Our expertise in Node.js, Python,
            Ruby, and other backend technologies ensures your application
            performs efficiently under any load.
          </motion.p>
          <div className={styles.spacer}></div>
          <li className={styles.l1}>
            Machine Learning and Deep Learning Models
          </li>
          <motion.p
            className={styles.head}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
          >
            {" "}
            Our data science team leverages the power of machine learning and
            deep learning to create intelligent models that drive innovation.
            Whether its predictive analytics, natural language processing, or
            image recognition, we have the expertise to build advanced AI
            solutions tailored to your business needs.
          </motion.p>
          <div className={styles.spacer}></div>{" "}
          <li className={styles.l1}>UI/UX Designing</li>
          <motion.p
            className={styles.head}
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
          >
            {" "}
            Our design team excels in creating intuitive and engaging user
            interfaces and experiences. We prioritize user-centric design
            principles to ensure your applications are not only functional but
            also delightful to use. Our services include wireframing,
            prototyping, and user testing to deliver designs that resonate with
            your target audience.
          </motion.p>
          <div className={styles.spacer}></div>{" "}
          <li className={styles.l1}>Logo Design</li>
          <motion.p
            className={styles.head}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            {" "}
            We offer professional logo design services to help you establish a
            strong brand identity. Our creative designers work closely with you
            to create logos that reflect your brand values and make a lasting
            impression.
          </motion.p>
        </ul>
      </div>
    </div>
  );
});

export default Service;
