import React from 'react';
import './Whyus.css';

const Whyus = () => {
  const posterImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80';

  return (
    <section id="whyus" className="b-w-section">
      
      {/* 1. High-Quality Real Gym Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="b-w-bg-video" 
        poster={posterImage} /* Fallback if video fails */
      >
        <source src="https://videos.pexels.com/video-files/2882617/2882617-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* 2. Heavily Blended Gradient Overlay for Perfect Text Visibility */}
      <div className="b-w-video-overlay"></div>

      {/* 3. Foreground Content */}
      <div className="b-w-container">
        
        <div className="b-w-content">
          <span className="b-w-badge">WHY CHOOSE US</span>
          
          <h2 className="b-w-title">
            <span className="b-w-white">THE BYSEN</span>
            <span className="b-w-orange">STANDARD</span>
          </h2>
          
          <p className="b-w-desc">
            7,000 sq.ft of elite training, a 100% unisex environment, and a dedicated Protein HUB. Here is why Pondicherry chooses BYSEN.
          </p>

          {/* --- 4. The 01, 02, 03 Grid --- */}
          <div className="b-w-grid">
            {/* Card 01 */}
            <div className="b-w-card">
              <span className="b-w-number">01</span>
              <div className="b-w-card-image-wrapper">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" alt="Gym Facility" />
              </div>
              <div className="b-w-card-content">
                <h4>7,000 Sq.Ft Facility</h4>
                <p>Pondicherry's largest training floor with an expansive strength zone, full CrossFit rig, and dedicated cardio arena.</p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="b-w-card">
              <span className="b-w-number">02</span>
              <div className="b-w-card-image-wrapper">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" alt="Unisex Gym" />
              </div>
              <div className="b-w-card-content">
                <h4>100% Unisex & Inclusive</h4>
                <p>A completely judgment-free zone where athletes of every gender and fitness level feel welcomed, supported, and empowered.</p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="b-w-card">
              <span className="b-w-number">03</span>
              <div className="b-w-card-image-wrapper">
                <img src="https://images.unsplash.com/photo-1594882645126-14020914d5cd?w=600&q=80" alt="Protein Hub" />
              </div>
              <div className="b-w-card-content">
                <h4>24/7 Access & Protein HUB</h4>
                <p>Work out any time, day or night. Plus, hit our on-site Protein HUB immediately after your session for the ultimate refuel.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Whyus;