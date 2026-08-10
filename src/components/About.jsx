import { motion } from "framer-motion";
import "./About.css";

const aboutImg =
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Text column */}
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
        >
          <div className="about-eyebrow">WHO WE ARE</div>

          <h2 className="about-title">
            PONDICHERRY&apos;S
            <br />
            <span className="about-title-accent">FITNESS GROUND</span>
          </h2>

          <p className="about-para">
            BYSEN Fitness is a 7,000 sq.ft unisex training facility built for
            people who take their training seriously &mdash; whatever that
            looks like for them. Cardio decks, a full CrossFit rig, group
            Zumba floors, and a strength zone, all under one roof.
          </p>

          <p className="about-para">
            Our Protein HUB means recovery starts the second your session
            ends &mdash; no detour required. Nearly 3,000 members strong and
            growing, on Pondicherry&apos;s biggest gym floor.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-num">7000</div>
              <div className="about-stat-label">SQ.FT FACILITY</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">2794+</div>
              <div className="about-stat-label">COMMUNITY MEMBERS</div>
            </div>
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          className="about-visual"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
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
            <div className="about-tag-title">Unisex</div>
            <div className="about-tag-sub">OPEN TO EVERY MEMBER</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;