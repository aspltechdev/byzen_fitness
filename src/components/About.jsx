import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../assets/ab.jpeg";

// ---- Custom hook ----
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, hasStarted, target, duration]);

  return { count, ref };
};

// ---- Stagger & rise animations ----
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const riseUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const riseUpVisual = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const About = () => {
  const { count: sqft, ref: sqftRef } = useCountUp(7000);
  const { count: members, ref: membersRef } = useCountUp(2794);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Text column */}
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="about-eyebrow" variants={riseUp}>
            WHO WE ARE
          </motion.div>

          <motion.h2 className="about-title" variants={riseUp}>
            PONDICHERRY&apos;S
            <br />
            <span className="about-title-accent">FITNESS GROUND</span>
          </motion.h2>

          <motion.p className="about-para" variants={riseUp}>
            BYSEN was founded by Margaret Senoreta, who traded a career built
            on dual Master&apos;s degrees in Criminal and Maritime Law for a
            life spent building &mdash; from Josh Jewellery to the eco-friendly
            Koora Kotta Resort and the Lubber Pandhu Turf Club. Through every
            venture, one thing stayed constant: a personal commitment to
            physical vitality.
          </motion.p>

          <motion.p className="about-para" variants={riseUp}>
            BYSEN &mdash; The Fitness Garage is her latest passion project: a
            judgment-free space where physical health and mental well-being
            coexist. This is your safe space &mdash; no judgment, just
            results. The goal: start now. The mission: make a difference.
          </motion.p>

          {/* Stats with animated numbers */}
          <motion.div className="about-stats" variants={riseUp}>
            <div className="about-stat" ref={sqftRef}>
              <div className="about-stat-num">{sqft}</div>
              <div className="about-stat-label">SQ.FT FACILITY</div>
            </div>
            <div className="about-stat" ref={membersRef}>
              <div className="about-stat-num">{members}+</div>
              <div className="about-stat-label">COMMUNITY MEMBERS</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          className="about-visual"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={riseUpVisual}
        >
          <div className="about-dots" aria-hidden="true" />
          <div className="about-outline-text" aria-hidden="true">TRAIN</div>
          <div className="about-blob" aria-hidden="true" />

          <div className="about-cutout">
            <img
              src={aboutImg}
              alt="BYSEN Fitness training floor in Pondicherry"
              className="about-cutout-img"
              loading="lazy"
            />
          </div>

          <div className="about-tag-card">
            <div className="about-tag-title">Bysen</div>
            <div className="about-tag-sub">OPEN TO EVERY MEMBER</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;