import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

// ------------------------------------------------------------
// LOCAL IMAGE IMPORTS — using h1.jpeg, h2.jpeg, h3.jpeg from src/assets
// ------------------------------------------------------------
import Img1 from "../assets/h1.jpeg";
import Img2 from "../assets/h2.jpeg";
import Img3 from "../assets/h3.jpeg";


// ------------------------------------------------------------
// SLIDE DATA — each entry has its own bg, text, float images, and stat
// ------------------------------------------------------------
const slideData = [
  {
    id: 0,
    bg: Img1,
    eyebrow: "UNISEX GYM · PONDICHERRY · 7000 SQ.FT",
    titleLight: "TRAIN",
    titleAccent: "WITHOUT LIMITS",
    subtitle:
      "Cardio, Zumba, CrossFit, and strength training on Pondicherry's biggest unisex gym floor — plus a Protein HUB to fuel every session.",
    floats: [], // Kept empty to prevent errors, since we removed them
    statValue: "2.7K+",
    statLabel: "Community on Instagram",
  },
  {
    id: 1,
    bg: Img2,
    eyebrow: "HIGH-PERFORMANCE · EXPERT COACHING · 24/7",
    titleLight: "BUILD",
    titleAccent: "YOUR EMPIRE",
    subtitle:
      "State-of-the-art equipment, dedicated deadlift platforms, and expert coaches to help you crush every personal record.",
    floats: [],
    statValue: "150+",
    statLabel: "Personal bests broken",
  },
  {
    id: 2,
    bg: Img3,
    eyebrow: "FUEL · RECOVER · REPEAT",
    titleLight: "FUEL",
    titleAccent: "YOUR FIRE",
    subtitle:
      "Premium protein shakes, pre-workout essentials, and a recovery zone designed to keep you performing at your peak.",
    floats: [],
    statValue: "300+",
    statLabel: "Shakes served daily",
  },
];

// ------------------------------------------------------------
// Animation variants
// ------------------------------------------------------------
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: {
    opacity: 0,
    x: 80,
    transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
  },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -30,
    transition: { duration: 0.3 },
  },
};

const bgVariants = {
  enter: {
    scale: 1.15,
    opacity: 0,
    filter: "brightness(1.4) saturate(1.3)",
  },
  center: {
    scale: 1,
    opacity: 1,
    filter: "brightness(1) saturate(1)",
    transition: {
      scale: { duration: 1.6, ease: [0.25, 0.1, 0, 1] },
      opacity: { duration: 1, ease: [0.25, 0.1, 0, 1] },
      filter: { duration: 1.2, ease: [0.25, 0.1, 0, 1] },
    },
  },
  exit: {
    scale: 0.97,
    opacity: 0,
    filter: "brightness(0.6) saturate(0.7)",
    transition: { duration: 0.8, ease: [0.55, 0, 1, 0.45] },
  },
};

// ----------------------------------------------
// 🔽 INCREASED SPEED (lower number = faster)
// ----------------------------------------------
const SLIDE_DURATION = 3000; // now 3 seconds

// ------------------------------------------------------------
// Component
// ------------------------------------------------------------
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const currentSlide = slideData[activeIndex];

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 35, mass: 0.4 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 35, mass: 0.4 });

  const bgMouseX = useTransform(smoothMouseX, [-500, 500], [-20, 20]);
  const bgMouseY = useTransform(smoothMouseY, [-300, 300], [-12, 12]);

  const organicX1 = useTransform(smoothMouseX, [-400, 400], [-30, 30]);
  const organicY1 = useTransform(smoothMouseY, [-250, 250], [-18, 18]);
  const organicX2 = useTransform(smoothMouseX, [-400, 400], [22, -22]);
  const organicY2 = useTransform(smoothMouseY, [-250, 250], [14, -14]);

  const handleMouseMove = useCallback(
    (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    },
    [mouseX, mouseY]
  );

  // Auto‑advance with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideData.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Navigate to a specific slide (for dot clicks)
  const goToSlide = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section
      id="hero"
      className="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ----- BACKGROUND ----- */}
      <div className="hero-bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeIndex}
            className="hero-bg-wrapper"
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ y, position: "absolute", inset: 0 }}
          >
            <motion.img
              src={currentSlide.bg}
              alt="Gym background"
              className="hero-bg-img"
              style={{ x: bgMouseX, y: bgMouseY }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero-overlay" style={{ zIndex: 3 }} />

        {/* Progress bar */}
        <div
          className="hero-bg-progress"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "3px",
            width: "100%",
            background: "rgba(255,255,255,0.15)",
            zIndex: 4,
          }}
        >
          {/* Removed 'key={activeIndex}' to allow smooth continuous looping */}
          <motion.div
            style={{ height: "100%", background: "currentColor" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          />
        </div>
      </div>

      {/* ----- LIGHT RAYS (static decorative) ----- */}
      <div
        className="hero-light-rays"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        <motion.div
          className="hero-ray hero-ray-1"
          style={{
            position: "absolute",
            top: "-10%",
            left: "15%",
            width: "120px",
            height: "140%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12), transparent)",
            transform: "rotate(12deg)",
          }}
          animate={{ opacity: [0.04, 0.1, 0.04], x: [-50, 50, -50] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-ray hero-ray-2"
          style={{
            position: "absolute",
            top: "-10%",
            left: "55%",
            width: "90px",
            height: "140%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1), transparent)",
            transform: "rotate(-10deg)",
          }}
          animate={{ opacity: [0.06, 0.12, 0.06], x: [30, -30, 30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-ray hero-ray-3"
          style={{
            position: "absolute",
            top: "-10%",
            left: "80%",
            width: "70px",
            height: "140%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)",
            transform: "rotate(8deg)",
          }}
          animate={{ opacity: [0.03, 0.08, 0.03], x: [-20, 40, -20] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ----- PARTICLES (static decorative) ----- */}
      <div
        className="hero-particles"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="hero-particle"
            style={{
              position: "absolute",
              left: `${5 + Math.random() * 90}%`,
              top: `${8 + Math.random() * 84}%`,
              width: `${1.5 + Math.random() * 3}px`,
              height: `${1.5 + Math.random() * 3}px`,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.7)",
            }}
            animate={{
              y: [0, -25 - Math.random() * 50, 0],
              x: [0, (Math.random() - 0.5) * 25, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ----- ORGANIC SHAPES (mouse-reactive) ----- */}
      <motion.div
        className="hero-organic hero-organic-1"
        style={{
          position: "absolute",
          top: "10%",
          left: "-8%",
          width: "360px",
          height: "360px",
          background: "rgba(255,94,14,0.18)",
          filter: "blur(10px)",
          zIndex: 2,
          pointerEvents: "none",
          x: organicX1,
          y: organicY1,
        }}
        animate={{
          borderRadius: [
            "55% 45% 65% 35% / 35% 55% 45% 65%",
            "45% 55% 35% 65% / 55% 35% 65% 45%",
            "55% 45% 65% 35% / 35% 55% 45% 65%",
          ],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <motion.div
        className="hero-organic hero-organic-2"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-6%",
          width: "300px",
          height: "300px",
          background: "rgba(255,140,66,0.15)",
          filter: "blur(10px)",
          zIndex: 2,
          pointerEvents: "none",
          x: organicX2,
          y: organicY2,
        }}
        animate={{
          borderRadius: [
            "45% 55% 35% 65% / 55% 35% 65% 45%",
            "55% 45% 65% 35% / 35% 55% 45% 65%",
            "45% 55% 35% 65% / 55% 35% 65% 45%",
          ],
          rotate: [0, -35, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* ----- MAIN CONTENT (dynamic per slide with exit animations) ----- */}
      <div className="hero-container">
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } },
                exit: { opacity: 0, transition: { duration: 0.3 } },
              }}
            >
              {/* Eyebrow */}
              <motion.div
                className="hero-eyebrow"
                variants={slideLeft}
                custom={0}
              >
                <span className="hero-eyebrow-line" />
                {currentSlide.eyebrow}
              </motion.div>

              {/* Title */}
              <h1 className="hero-title">
                <motion.span
                  className="hero-title-light"
                  variants={slideLeft}
                  custom={0.15}
                >
                  {currentSlide.titleLight}
                </motion.span>
                <motion.span
                  className="hero-title-accent"
                  variants={slideLeft}
                  custom={0.3}
                >
                  {currentSlide.titleAccent}
                </motion.span>
              </h1>

              {/* Subtitle */}
              <motion.p className="hero-sub" variants={slideLeft} custom={0.45}>
                {currentSlide.subtitle}
              </motion.p>

              {/* Buttons (static) */}
              <motion.div
                className="hero-actions"
                variants={slideLeft}
                custom={0.6}
              >
                <motion.button
                  className="hero-btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>Start Free Trial</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ display: "inline-flex" }}
                  >
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </motion.span>
                </motion.button>

                <motion.button
                  className="hero-btn-ghost"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    document
                      .querySelector("#gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="hero-play-icon">
                    <Play size={13} fill="currentColor" strokeWidth={0} />
                  </span>
                  <span>Watch The Floor</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ----- REMOVED FLOATING IMAGES ----- */}
        <div className="hero-visuals">
          {/* Empty div - No floating images */}
        </div>
      </div>

      {/* ----- SLIDE INDICATOR (dots with progress fill) ----- */}
      <div className="hero-slide-indicator">
        <div className="hero-dots">
          {slideData.map((_, index) => (
            <motion.button
              key={index}
              className={`hero-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.3 }}
            >
              {index === activeIndex && (
                <motion.span
                  className="hero-dot-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: SLIDE_DURATION / 1000,
                    ease: "linear",
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
        <span className="hero-slide-counter">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(slideData.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="hero-scroll-line" />
        SCROLL
      </motion.div>
    </section>
  );
};

export default Hero;