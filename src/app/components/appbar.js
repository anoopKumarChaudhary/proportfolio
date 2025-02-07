"use client";
import React from "react";
import styles from "./styles/appbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AtSymbolIcon,
  Bars3BottomLeftIcon,
  Bars3CenterLeftIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

const Appbar = React.memo(() => {
  return (
    <div className={styles.main}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        ANOOP KUMAR CHAUDHARY
      </motion.h2>
      <motion.ul
        className={styles.list}
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <li>
          <Link href="" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            Works
          </Link>
        </li>{" "}
        <li>
          <Link href="" className={styles.link}>
            Hackathons
          </Link>
        </li>{" "}
        <li>
          <Link href="" className={styles.link}>
            Services
          </Link>
        </li>{" "}
        <li>
          <Link href="" className={styles.link}>
            About
          </Link>
        </li>
      </motion.ul>
      <motion.button
        className={styles.btn}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in touch
      </motion.button>
      <Bars3CenterLeftIcon className={styles.menu} />
    </div>
  );
});

export default Appbar;
