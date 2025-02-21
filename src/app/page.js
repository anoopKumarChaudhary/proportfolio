"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
// import HomePage from "./components/home.js";
// import Skills from "./components/skills.js";
// import Hackathons from "./components/hackathons.js";
// import Service from "./components/services.js";
// import Footer from "./components/footer.js";

const LazyPages = [
  dynamic(() => import("./components/home.js")),
  dynamic(() => import("./components/skills.js")),
  dynamic(() => import("./components/hackathons.js")),
  dynamic(() => import("./components/services.js")),
  dynamic(() => import("./components/footer.js")),
];

export default function Home() {
  const [visiblePages, setVisiblePages] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setVisiblePages((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );

    observerRef.current.querySelectorAll(".page-placeholder").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={observerRef}>
      {LazyPages.map((PageComponent, index) => (
        <div key={index} className="page-wrapper">
          {visiblePages.includes(index) ? (
            <PageComponent />
          ) : (
            <div
              className="page-placeholder"
              data-index={index}
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ddd",
              }}
            >
              Loading Page {index + 1}...
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
