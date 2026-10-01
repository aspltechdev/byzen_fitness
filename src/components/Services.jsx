import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

// Header elements: staggered rise-up on scroll into view
const headerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Pricing grid: staggers each card in
const gridContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Each card rises and fades in
const cardRiseUp = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Feature list items
const featureList = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

const featureItem = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Reusable opening-hours text
const OPENING_HOURS =
  'Open:\nMon-Sat | 5:30AM - 10:30PM\nSun | 6AM - 12PM';

const Services = () => {
  // Individual Membership Plans
  const individualPlans = [
    {
      duration: '1 Month',
      price: '₹2,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
      ],
      cta: 'Join Now',
      popular: false,
    },
    {
      duration: '3 Months',
      price: '₹5,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
        'Best Value',
      ],
      cta: 'Join Now',
      popular: true,
    },
    {
      duration: '6 Months',
      price: '₹8,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
      ],
      cta: 'Join Now',
      popular: false,
    },
    {
      duration: '1 Year',
      price: '₹12,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
        'Best Long-Term Value',
      ],
      cta: 'Join Now',
      popular: false,
    },
  ];

  // Couples/Friends Package
  const couplesPlans = [
    {
      duration: '1 Month',
      price: '₹4,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
      ],
      cta: 'Join Now',
      popular: false,
    },
    {
      duration: '3 Months',
      price: '₹9,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
        'Best Value',
      ],
      cta: 'Join Now',
      popular: true,
    },
    {
      duration: '6 Months',
      price: '₹15,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
      ],
      cta: 'Join Now',
      popular: false,
    },
    {
      duration: '1 Year',
      price: '₹21,999',
      showPrice: true,
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Imported Equipment',
        OPENING_HOURS,
        '365 Days Access',
        'Best Long-Term Value',
      ],
      cta: 'Join Now',
      popular: false,
    },
  ];

  // Personal Training Fees
  const ptPlans = [
    {
      title: 'Classic',
      sessions: '15 Sessions',
      price: '₹5,000',
      showPrice: true,
      features: [
        'Personalized Training',
        'Form Correction',
        'Progress Tracking',
        'Flexible Scheduling',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      title: 'Elite',
      sessions: '20 Sessions',
      price: '₹8,000',
      showPrice: true,
      features: [
        'Personalized Training',
        'Form Correction',
        'Progress Tracking',
        'Flexible Scheduling',
        'Nutrition Guidance',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      title: 'Royal',
      sessions: '30 Sessions',
      price: '₹10,000',
      showPrice: true,
      features: [
        'Personalized Training',
        'Form Correction',
        'Progress Tracking',
        'Flexible Scheduling',
        'Nutrition Guidance',
        'Advanced Techniques',
      ],
      cta: 'Get Started',
      popular: false,
    },
  ];

  // Reusable check icon
  const CheckIcon = () => (
    <svg
      className="b-s-check-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  // Reusable feature list
  const FeatureList = ({ features }) => (
    <motion.ul
      className="b-s-features-list"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={featureList}
    >
      {features.map((feature, idx) => (
        <motion.li
          key={idx}
          className="b-s-feature-item"
          variants={featureItem}
        >
          <CheckIcon />

          <span className="b-s-feature-text">
            {feature}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );

  // Reusable Membership Card
  const MembershipCard = ({ plan }) => (
    <motion.div
      className={`b-s-price-card ${
        plan.popular ? 'b-s-card-popular' : ''
      }`}
      variants={cardRiseUp}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {plan.popular && (
        <motion.div
          className="b-s-badge-popular"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: 'spring',
            stiffness: 260,
            damping: 18,
          }}
        >
          Best Value
        </motion.div>
      )}

      <h3 className="b-s-plan-title">{plan.duration}</h3>

      {plan.showPrice && (
        <div className="b-s-price-wrapper">
          <span className="b-s-price">{plan.price}</span>
        </div>
      )}

      <FeatureList features={plan.features} />

      <motion.a
        href="#contact"
        className="b-s-join-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {plan.cta}
        <span className="b-s-join-arrow">➜</span>
      </motion.a>
    </motion.div>
  );

  return (
    <section id="membership" className="b-s-section">
      {/* Background Image with Overlay */}
      <div className="b-s-bg-wrapper">
        <div className="b-s-bg-overlay"></div>
      </div>

      <div className="b-s-container">

        {/* Section Header */}
        <motion.div
          className="b-s-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={headerContainer}
        >
          <motion.span
            className="b-s-badge"
            variants={headerItem}
          >
            MEMBERSHIP PLANS
          </motion.span>

          <motion.h2
            className="b-s-title"
            variants={headerItem}
          >
            Choose Your{' '}
            <span className="b-s-orange">Journey</span>
          </motion.h2>

          <motion.p
            className="b-s-desc"
            variants={headerItem}
          >
            Flexible plans designed to fit your lifestyle.
            Imported equipment, open Mon - Sat 5:30 AM - 10:30 PM
            and Sun 6 AM - 12 PM, 365 days a year — join the BYSEN
            community and unlock your true potential today.
          </motion.p>
        </motion.div>

        {/* Individual Membership */}
        <motion.div
          className="b-s-plan-category"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerContainer}
        >
          <motion.h3
            className="b-s-category-title"
            variants={headerItem}
          >
            Individual{' '}
            <span className="b-s-orange">Membership</span>
          </motion.h3>
        </motion.div>

        <motion.div
          className="b-s-pricing-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridContainer}
        >
          {individualPlans.map((plan, index) => (
            <MembershipCard
              key={index}
              plan={plan}
            />
          ))}
        </motion.div>

        {/* Couples/Friends Package */}
        <motion.div
          className="b-s-plan-category"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerContainer}
        >
          <motion.h3
            className="b-s-category-title"
            variants={headerItem}
          >
            Couples / Friends{' '}
            <span className="b-s-orange">Package</span>
          </motion.h3>
        </motion.div>

        <motion.div
          className="b-s-pricing-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridContainer}
        >
          {couplesPlans.map((plan, index) => (
            <MembershipCard
              key={index}
              plan={plan}
            />
          ))}
        </motion.div>

        {/* Personal Training Fees */}
        <motion.div
          className="b-s-plan-category"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerContainer}
        >
          <motion.h3
            className="b-s-category-title"
            variants={headerItem}
          >
            Personal{' '}
            <span className="b-s-orange">Training</span>
          </motion.h3>
        </motion.div>

        <motion.div
          className="b-s-pricing-grid b-s-pricing-grid-pt"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridContainer}
        >
          {ptPlans.map((plan, index) => (
            <motion.div
              className={`b-s-price-card ${
                plan.popular ? 'b-s-card-popular' : ''
              }`}
              key={index}
              variants={cardRiseUp}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                  ease: 'easeOut',
                },
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="b-s-badge-popular"
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    type: 'spring',
                    stiffness: 260,
                    damping: 18,
                  }}
                >
                  Most Popular
                </motion.div>
              )}

              <h3 className="b-s-plan-title">
                {plan.title}
              </h3>

              <p className="b-s-sessions">
                {plan.sessions}
              </p>

              {plan.showPrice && (
                <div className="b-s-price-wrapper">
                  <span className="b-s-price">
                    {plan.price}
                  </span>
                </div>
              )}

              <FeatureList features={plan.features} />

              <motion.a
                href="#contact"
                className="b-s-join-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {plan.cta}
                <span className="b-s-join-arrow">
                  ➜
                </span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;