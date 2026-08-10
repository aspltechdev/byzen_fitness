import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

const heroImg =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop";
const floatImg1 =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop";
const floatImg2 =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop";
const floatImg3 =
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500&auto=format&fit=crop";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatIn = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 2, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Bysen gym floor" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className="hero-eyebrow-line" />
            UNISEX GYM &middot; PONDICHERRY &middot; 7000 SQ.FT
          </motion.div>

          <h1 className="hero-title">
            <motion.span
              className="hero-title-light"
              initial="hidden"
              animate="show"
              custom={0.15}
              variants={fadeUp}
            >
              TRAIN
            </motion.span>
            <motion.span
              className="hero-title-accent"
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
            >
              WITHOUT LIMITS
            </motion.span>
          </h1>

          <motion.p
            className="hero-sub"
            initial="hidden"
            animate="show"
            custom={0.45}
            variants={fadeUp}
          >
            Cardio, Zumba, CrossFit, and strength training on Pondicherry's
            biggest unisex gym floor &mdash; plus a Protein HUB to fuel every
            session.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={fadeUp}
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
              <ArrowRight size={18} strokeWidth={2.5} />
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
        </div>

        {/* Floating animated image stack */}
        <div className="hero-visuals">
          <motion.div
            className="hero-float hero-float-lg"
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={floatIn}
          >
            <img src={floatImg1} alt="Strength training rack" />
          </motion.div>

          <motion.div
            className="hero-float hero-float-sm hero-float-a"
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={floatIn}
          >
            <img src={floatImg2} alt="Weight training session" />
          </motion.div>

          <motion.div
            className="hero-float hero-float-sm hero-float-b"
            initial="hidden"
            animate="show"
            custom={0.9}
            variants={floatIn}
          >
            <img src={floatImg3} alt="Gym equipment close-up" />
          </motion.div>

          <motion.div
            className="hero-stat-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-stat-num">2.7K+</span>
            <span className="hero-stat-label">Community on Instagram</span>
          </motion.div>
        </div>
      </div>

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