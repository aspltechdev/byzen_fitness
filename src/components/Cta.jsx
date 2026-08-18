import React from "react";
import "./cta.css";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import ctaBg from "../assets/g3.jpg"; // swap this for whichever gym photo you want behind the CTA

const infoCards = [
  {
    icon: <Phone size={22} />,
    label: "Call Us",
    value: "+91 98400 77793",
  },
  {
    icon: <MapPin size={22} />,
    label: "Visit Us",
    value: "Pondicherry",
  },
  {
    icon: <Clock size={22} />,
    label: "Open Hours",
    value: "Mon - Sun, 5AM - 10PM",
  },
];

const CTA = () => {
  return (
    <section className="cta-section" style={{ "--cta-bg": `url(${ctaBg})` }}>
      <div className="cta-badge">JOIN THE MOVEMENT</div>

      <h2 className="cta-heading">
        Ready To <span className="highlight">Forge Your Legend?</span>
      </h2>

      <p className="cta-subtext">
        Step into 7000 sq.ft of elite, unisex training space with a
        dedicated Protein HUB. Your transformation starts the moment you
        walk in.
      </p>

     <button
  className="cta-button"
  onClick={() => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    });
  }}
>
  JOIN NOW <ArrowRight size={20} />
</button>

      <div className="cta-info-grid">
        {infoCards.map((item, i) => (
          <div className="cta-info-card" key={i}>
            <div className="cta-info-icon">{item.icon}</div>
            <div className="cta-info-text">
              <h4>{item.label}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;