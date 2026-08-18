// Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

import pro1 from '../assets/c.jpeg';
import pro2 from '../assets/pro2.jpg';
import pro3 from '../assets/h10.jpeg';
import pro4 from '../assets/1a.png';
import pro5 from '../assets/g4.jpg';
import pro6 from '../assets/c.png';

const gridContainer = {


  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardRiseUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleFade = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Features = () => {
  const gymFeatures = [
  { 
    title: 'Cardio Zone', 
    label: 'Join Now', 
    image: pro4, 
    description: 'A dedicated cardio zone equipped with the latest machines to build endurance, torch calories, and keep every session moving.', 
    link: '#contact' 
  },
  { 
    title: 'Qualified Trainers', 
    label: 'Start Training', 
    image: pro2, 
    description: 'Our qualified trainers are with you every rep of the way — guiding form, building programs, and pushing you toward real results.', 
    link: '#contact' 
  },
  { 
    title: 'World Class Equipment', 
    label: 'Join The Gym', 
    image: pro1, 
    description: 'Top-tier, world-class equipment across every zone of the gym, built to support serious strength, weight, and functional training.', 
    link: '#contact' 
  },
  { 
    title: 'Protein HUB', 
    label: 'Fuel Your Goals', 
    image: pro3, 
    description: 'Recovery starts the second your session ends. Grab a shake, a supplement, or a post-workout meal right on the floor — no detour required.', 
    link: '#contact' 
  },
  { 
    title: 'Recovery Sessions', 
    label: 'Join & Recover', 
    image: pro5, 
    description: 'Steam therapy, cold plunge, and massage chairs — recovery sessions designed to help you bounce back stronger between workouts.', 
    link: '#contact' 
  },
  { 
    title: 'Spacious Parking', 
    label: 'Get Started', 
    image: pro6, 
    description: 'Spacious, hassle-free parking right at the facility, so you can get straight from your car to your workout.', 
    link: '#contact' 
  },
];

  return (
    <section id="programs" className="b-feat-section">
      <div className="b-feat-container">
        <motion.div
          className="b-feat-section-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleFade}
          custom={0}
        >
          <span className="b-feat-section-eyebrow">Why Choose Us</span>
          <h2 className="b-feat-section-heading">
            Built for <span className="b-feat-orange">Beasts</span>
          </h2>
          <p className="b-feat-section-desc">
            Every corner of our facility is designed to push you further.
          </p>
        </motion.div>

        <motion.div
          className="b-feat-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
        >
          {gymFeatures.map((feature, index) => (
            <motion.div
              className="b-feat-card"
              key={index}
              variants={cardRiseUp}
            >
              <div className="b-feat-card-img-wrapper">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </div>
              
              {/* --- White Rectangle Overlay --- */}
              <div className="b-feat-card-overlay">
                <div className="b-feat-card-white">
                  <h3 className="b-feat-card-title">{feature.title}</h3>
                  <p className="b-feat-card-desc">{feature.description}</p>
                  <a href={feature.link} className="b-feat-card-label">
                    {feature.label} →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;