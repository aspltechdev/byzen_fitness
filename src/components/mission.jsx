import React from "react";
import { Dumbbell, Users, Trophy, Clock, CheckCircle, Target, Eye } from "lucide-react";
import "./mission.css";

// ------------------------------------------------------------
// LOCAL IMAGE IMPORT — using v1.png from src/assets
// ------------------------------------------------------------
import V1Img from "../assets/v1.png";

const cards = [
  {
    icon: <Target size={26} />,
    title: "Our Mission",
    desc: "To empower individuals to achieve their peak physical potential through world-class facilities, expert guidance, and an unwavering commitment to excellence in every workout.",
  },
  {
    icon: <Eye size={26} />,
    title: "Our Vision",
    desc: "To create a global community of disciplined athletes who inspire each other to push beyond limits, build unbreakable resilience, and transform lives through the power of fitness.",
  },
];

const highlights = [
  { icon: <Trophy size={18} />, label: "5000+ Members Transformed" },
  { icon: <Clock size={18} />, label: "Open 24/7" },
  { icon: <CheckCircle size={18} />, label: "Certified Coaches" },
];

const programs = [
  "Strength Training",
  "HIIT",
  "CrossFit",
  "Yoga",
  "Nutrition Coaching",
];

export default function MissionSection() {
  return (
    <section id="mission" className="mission-section">
      {/* Background image set using local import */}
      <div
        className="mission-bg"
        style={{ backgroundImage: `url(${V1Img})` }}
      />
      
      {/* Bright overlay so background is clearly visible */}
      <div className="mission-overlay" />

      <div className="mission-content">
        <span className="mission-badge">OUR MISSION & VISION</span>

        <h2 className="mission-heading">
          Built for Strength.
          <br />
          Driven by <span className="highlight">Discipline</span>
        </h2>

        <div className="mission-grid">
          {cards.map((card) => (
            <div className="mission-card" key={card.title}>
              <div className="mission-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mission-highlights">
          {highlights.map((item) => (
            <div className="highlight-chip" key={item.label}>
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>

        <div className="mission-programs">
          {programs.map((tag) => (
            <span className="program-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}