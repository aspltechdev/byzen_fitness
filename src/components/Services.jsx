import React from 'react';
import './Services.css';

const Services = () => {
  const plans = [
    {
      title: 'Basic',
      price: '₹1,499',
      duration: '/mo',
      features: [
        'Full Gym Access',
        'Cardio & Strength Zone',
        'Locker Room Facility',
        'Basic Support'
      ],
      cta: 'Start Training',
      popular: false
    },
    {
      title: 'Premium',
      price: '₹2,499',
      duration: '/mo',
      features: [
        'All Basic Features',
        'Unlimited Group Classes',
        'Zumba & CrossFit Access',
        'Protein HUB Discounts'
      ],
      cta: 'Join Premium',
      popular: true // This will highlight the card with an orange border
    },
    {
      title: 'Elite',
      price: '₹3,999',
      duration: '/mo',
      features: [
        'All Premium Features',
        '24/7 Gym Access',
        '1-on-1 Personal Training',
        'Custom Meal Plans'
      ],
      cta: 'Go Elite',
      popular: false
    }
  ];

  return (
    <section id="services" className="b-s-section">
      <div className="b-s-container">
        
        {/* --- Section Header --- */}
        <div className="b-s-header">
          <span className="b-s-badge">MEMBERSHIP PLANS</span>
          <h2 className="b-s-title">
            Choose Your <span className="b-s-orange">Journey</span>
          </h2>
          <p className="b-s-desc">
            Flexible plans designed to fit your lifestyle. Join the BYSEN community and unlock your true potential today.
          </p>
        </div>

        {/* --- Membership Pricing Grid --- */}
        <div className="b-s-pricing-grid">
          {plans.map((plan, index) => (
            <div 
              className={`b-s-price-card ${plan.popular ? 'b-s-card-popular' : ''}`} 
              key={index}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="b-s-badge-popular">Best Value</div>
              )}

              <h3 className="b-s-plan-title">{plan.title}</h3>
              
              <div className="b-s-price-wrapper">
                <span className="b-s-price">{plan.price}</span>
                <span className="b-s-duration">{plan.duration}</span>
              </div>

              <ul className="b-s-features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="b-s-feature-item">
                    <svg className="b-s-check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="b-s-join-btn">
                {plan.cta}
                <span className="b-s-join-arrow">➜</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;