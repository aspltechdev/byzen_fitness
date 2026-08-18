// Whyus.jsx
import React from 'react';
import './Whyus.css';
import s1 from '../assets/l8.jpg';
import s2 from '../assets/g7.jpg';
import s3 from '../assets/S3.jpeg';
import s4 from '../assets/g9.jpg';
import s5 from '../assets/1a.png';
import s6 from '../assets/k.png';
import steamImg from '../assets/d2.png';
import massageImg from '../assets/d1.png';
import proteinImg from '../assets/v1.png';
import coldPlungeImg from '../assets/d3.png';

const Whyus = () => {
  // All 6 programs from the brochure "SERVICES OFFERED" page
  const programs = [
    {
      id: 1,
      number: '01',
      // icon: '🧑‍🏫',
      title: 'Personal Training',
      // description: 'One-on-one coaching built around your goals, with form correction and a program that actually fits your life.',
      image: s1,
    },
    {
      id: 2,
      number: '02',
      // icon: '🏋️',
      title: 'Strength Training',
      // description: 'Free weights, machines & cables — everything you need to build raw, functional strength.',
      image: s2,
    },
    {
      id: 3,
      number: '03',
      // icon: '🏋️‍♂️',
      title: 'Cardio Zone',
      // description: 'Barbells, plates & racks for serious lifters — progressive overload, done right.',
      image: s3,
    },
    {
      id: 4,
      number: '04',
      // icon: '🔥',
      title: 'CrossFit',
      // description: 'Full CrossFit rig · squat racks · deadlift platforms · functional fitness at its finest.',
      image: s4,
    },
    {
      id: 5,
      number: '05',
      // icon: '🏃',
      title: 'Zumba',
      // description: 'State-of-the-art treadmills, bikes & rowers — high intensity, premium airflow for maximum endurance.',
      image: s5,
    },
    {
      id: 6,
      number: '06',
      // icon: '💃',
     title: 'Weight Training',
      // description: 'High-energy group Zumba classes with certified instructors — cardio that never feels like a chore.',
      image: s6,
    },
  ];

  // Additional services from the brochure "ADDITIONAL SERVICES" page
  const extraServices = [
    { id: 1, name: 'Steam', price: '₹250', note: '/ 15 min', color: 'b-w-service-orange', image: steamImg },
    { id: 2, name: 'Massage Chair', price: '₹250', note: '/ 15 min', color: 'b-w-service-purple', image: massageImg },
    { id: 3, name: 'Protein Hub', price: 'As per menu', note: '', color: 'b-w-service-green', image: proteinImg },
    { id: 4, name: 'Cold Plunge', price: 'Sat & Sun', note: 'slots only', color: 'b-w-service-blue', image: coldPlungeImg },
  ];

  return (
    <section id="yus" className="b-w-section">
      {/* 1. Cinematic background video */}
      <video className="b-w-bg-video" autoPlay muted loop playsInline>
        <source
          src="https://videos.pexels.com/video-files/3194932/3194932-uhd_2732_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. WARM ORANGE-BEIGE OVERLAY — NOT BLACK! */}
      <div className="b-w-video-overlay"></div>

      {/* 3. Container */}
      <div className="b-w-container">
        {/* Badge */}
        <div className="b-w-badge"> OUR PROGRAMS</div>

        {/* Title */}
        <div className="b-w-title">
          <span className="b-w-white">choose your</span>
          <span className="b-w-orange">workout</span>
        </div>

        {/* Description */}
        <p className="b-w-desc">
          From high-intensity to recovery — find your perfect fit at Pondicherry's biggest gym
        </p>

        {/* 6-card grid — Services Offered */}
        <div className="b-w-grid">
          {programs.map((program) => (
            <div key={program.id} className="b-w-card">
              <div className="b-w-number">{program.number}</div>
              <div className="b-w-card-image-wrapper">
                <img src={program.image} alt={program.title} loading="lazy" />
              </div>
              <div className="b-w-card-content">
                <h4><i>{program.icon}</i> {program.title}</h4>
                <p>{program.description}</p>
                <span className="b-w-card-accent"></span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Additional Services Section - No Black Card --- */}
        <div className="b-w-additional-services">
          <div className="b-w-additional-header">
            <span className="b-w-badge b-w-additional-badge">EXTRA SERVICES</span>
            <h3 className="b-w-additional-title">
              Additional <span className="b-w-orange">Services</span>
            </h3>
          </div>

          {/* Extra Services Marquee - wide, short cards with image */}
          <div className="b-w-services-marquee-wrapper">
            <div className="b-w-services-marquee">
              <div className="b-w-services-marquee-track">
                {[...extraServices, ...extraServices].map((service, index) => (
                  <div
                    key={`${service.id}-${index}`}
                    className={`b-w-service-card ${service.color}`}
                  >
                    <div className="b-w-service-card-img">
                      <img src={service.image} alt={service.name} loading="lazy" />
                    </div>
                    <div className="b-w-service-card-text">
                      <h4 className="b-w-service-name">{service.name}</h4>
                      <p className="b-w-service-price">
                        {service.price} {service.note && <span>{service.note}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer stats */}
        {/* <div className="b-w-stats">
          <span className="b-w-stats-item">7,000 sq.ft</span>
          <span className="b-w-stats-item b-w-stats-orange">2,794+ members</span>
          <span className="b-w-stats-item">pondicherry's biggest</span>
        </div> */}
      </div>
    </section>
  );
};

export default Whyus;