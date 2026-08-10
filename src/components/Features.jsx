import React from 'react';
import './Features.css';

const Features = () => {
  const gymFeatures = [
    {
      title: '7000 Sq. Ft. Facility',
      desc: 'Immerse yourself in our massive, pristine training floor. Ample space for heavy lifting, functional training, and dedicated cardio zones.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&fit=crop&auto=format' 
    },
    {
      title: 'Unisex Gym',
      desc: 'A fully inclusive and safe sanctuary designed for every athlete. No judgment, just pure motivation and strength.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&fit=crop&auto=format'
    },
    {
      title: 'Protein HUB',
      desc: 'Fuel your muscles with premium whey isolates, pre-workouts, amino acids, and custom healthy meal prep options on-site.',
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d5cd?w=800&fit=crop&auto=format'
    },
    {
      title: 'Cardio & Zumba',
      desc: 'Unleash your endurance on top-tier treadmills and bikes, then switch to high-energy, heart-pumping Zumba dance sessions.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&fit=crop&auto=format'
    },
    {
      title: 'CrossFit Training',
      desc: 'Push your functional limits with intense HIIT, heavy sled pushes, box jumps, and obstacle-based cross-training circuits.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&fit=crop&auto=format'
    },
    {
      title: 'Weight & Strength',
      desc: 'Our dedicated heavy-lifting zone features Olympic platforms, squat racks, and an extensive free-weight arsenal.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&fit=crop&auto=format'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Gym",
    "name": "Bysen Fitness",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pondicherry",
      "addressCountry": "IN"
    }
  };

  return (
    <section id="features" className="b-feat-section">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="b-feat-container">
        {/* --- Cinematic Hero Video --- */}
        <div className="b-feat-hero">
          <div className="b-feat-video-wrapper">
            <video autoPlay muted loop playsInline className="b-feat-hero-video">
              <source src="https://videos.pexels.com/video-files/3195388/3195388-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="b-feat-video-overlay"></div>
            <div className="b-feat-hero-content">
              <span className="b-feat-badge">BYSEN FITNESS PONDICHERRY</span>
              <h1 className="b-feat-title">
                Forge Your <span className="b-feat-orange">Legend</span>
              </h1>
              <p className="b-feat-subtitle">
                7000 sq.ft of pure elite training. Unisex, inclusive, and powered by a dedicated Protein HUB. 
              </p>
            </div>
          </div>
        </div>

        {/* --- Cinematic Image Grid (No Icons) --- */}
        <div className="b-feat-grid">
          {gymFeatures.map((feature, index) => (
            <div className="b-feat-card" key={index}>
              <div className="b-feat-card-img-wrapper">
                <img src={feature.image} alt={feature.title} loading="lazy" />
                <div className="b-feat-card-gradient"></div>
              </div>
              
              {/* Editorial Index Number */}
              <div className="b-feat-number">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <div className="b-feat-card-content">
                {/* Premium Orange Accent Bar */}
                <div className="b-feat-accent-line"></div>
                <h3 className="b-feat-card-title">{feature.title}</h3>
                <p className="b-feat-card-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;