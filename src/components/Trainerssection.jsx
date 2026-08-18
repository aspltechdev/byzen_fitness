import { useState } from "react";
import "./Trainerssection.css";

const TRAINER = {
  name: "Marcus Reyes",
  title: "Certified Personal Trainer",
  tagline: "FORGE YOUR BEST SELF",
  subtext:
    "Personal training designed around you — your goals, your pace, your results.",
  quote: "I don't train bodies. I train the person who has to live in one.",
  initials: "MR",
  photo:
    "https://images.unsplash.com/photo-1653587108842-58a9416a0ce9?fm=jpg&q=80&w=1400&auto=format&fit=crop",
  heroStats: [
    { value: "10+", label: "Years Coaching" },
    { value: "400+", label: "Clients Trained" },
    { value: "3", label: "Certifications" },
    { value: "24/7", label: "Availability" },
  ],
};

const MARQUEE_TRAINERS = [
  {
    name: "Marcus Reyes",
    title: "Certified Personal Trainer",
    tagline: "FORGE YOUR BEST SELF",
    subtext:
      "Personal training designed around you — your goals, your pace, your results.",
    quote: "I don't train bodies. I train the person who has to live in one.",
    initials: "MR",
    photo:
      "https://images.unsplash.com/photo-1653587108842-58a9416a0ce9?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1653587108842-58a9416a0ce9?fm=jpg&q=80&w=400&auto=format&fit=crop",
    heroStats: [
      { value: "10+", label: "Years Coaching" },
      { value: "400+", label: "Clients Trained" },
      { value: "3", label: "Certifications" },
      { value: "24/7", label: "Availability" },
    ],
    stat: "MR",
  },
  {
    name: "Elena Voss",
    title: "Strength & Conditioning",
    tagline: "LIFT WITH PURPOSE",
    subtext:
      "Strength programs built to make every rep count — power, control, progress.",
    quote: "Strength isn't given. It's built one honest rep at a time.",
    initials: "EV",
    photo:
      "https://images.unsplash.com/photo-1581009137042-c552e485697a?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1581009137042-c552e485697a?fm=jpg&q=80&w=400&auto=format&fit=crop",
    heroStats: [
      { value: "8+", label: "Years Coaching" },
      { value: "250+", label: "Clients Trained" },
      { value: "2", label: "Certifications" },
      { value: "30KG", label: "PR Improvement" },
    ],
    stat: "30KG",
  },
  {
    name: "Derek Chen",
    title: "Olympic Lifting",
    tagline: "EXPLOSIVE POWER",
    subtext:
      "Technical Olympic lifting coaching for speed, precision, and raw power.",
    quote: "Perfect technique first. Heavy weight follows.",
    initials: "DC",
    photo:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?fm=jpg&q=80&w=400&auto=format&fit=crop",
    heroStats: [
      { value: "12+", label: "Years Coaching" },
      { value: "180+", label: "Clients Trained" },
      { value: "4", label: "Certifications" },
      { value: "45KG", label: "PR Improvement" },
    ],
    stat: "45KG",
  },
  {
    name: "Sophia Park",
    title: "Mobility & Recovery",
    tagline: "MOVE WITHOUT LIMITS",
    subtext:
      "Restore range of motion, prevent injury, and move better every single day.",
    quote: "Recovery isn't rest. It's where the real progress happens.",
    initials: "SP",
    photo:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=400&auto=format&fit=crop",
    heroStats: [
      { value: "6+", label: "Years Coaching" },
      { value: "300+", label: "Clients Trained" },
      { value: "3", label: "Certifications" },
      { value: "20KG", label: "PR Improvement" },
    ],
    stat: "20KG",
  },
  {
    name: "James Okafor",
    title: "Sports Performance",
    tagline: "TRAIN LIKE AN ATHLETE",
    subtext:
      "Performance-driven training that builds speed, agility, and game-day power.",
    quote: "Champions are built in the reps nobody sees.",
    initials: "JO",
    photo:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=400&auto=format&fit=crop",
    heroStats: [
      { value: "9+", label: "Years Coaching" },
      { value: "220+", label: "Clients Trained" },
      { value: "3", label: "Certifications" },
      { value: "55KG", label: "PR Improvement" },
    ],
    stat: "55KG",
  },
  {
    name: "Mia Torres",
    title: "Nutrition & Wellness",
    tagline: "FUEL THE PROCESS",
    subtext:
      "Sustainable nutrition coaching that fits your life, not the other way around.",
    quote: "What you eat is training too.",
    initials: "MT",
    photo:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=400&auto=format&fit=crop",
    heroStats: [
      { value: "7+", label: "Years Coaching" },
      { value: "270+", label: "Clients Trained" },
      { value: "2", label: "Certifications" },
      { value: "15KG", label: "PR Improvement" },
    ],
    stat: "15KG",
  },
  {
    name: "Liam Nguyen",
    title: "Functional Fitness",
    tagline: "EVERYDAY STRENGTH",
    subtext:
      "Functional training that translates straight into real-world strength.",
    quote: "Train for life, not just for the mirror.",
    initials: "LN",
    photo:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1599058917765-a780cb07a2f7?fm=jpg&q=80&w=400&auto=format&fit=crop",
    heroStats: [
      { value: "5+", label: "Years Coaching" },
      { value: "190+", label: "Clients Trained" },
      { value: "2", label: "Certifications" },
      { value: "40KG", label: "PR Improvement" },
    ],
    stat: "40KG",
  },
];

export default function Trainerssection() {
  const [activeTrainer, setActiveTrainer] = useState(MARQUEE_TRAINERS[0]);

  return (
    <section className="spotlight-section">
      <div className="spotlight-header">
        <div className="spotlight-eyebrow">
          <span className="spotlight-stripe" />
          <span>THE COACH</span>
        </div>
        <h2 className="spotlight-title">
          ONE COACH. <span className="spotlight-accent">NO SHORTCUTS.</span>
        </h2>
      </div>

      <div className="spotlight-grid">
        <div className="spotlight-card card-hero">
          {/* Ghost name */}
          <span className="hero-ghost-name">
            {activeTrainer.name.split(" ")[0]}
          </span>

          {/* Photo with mask */}
          <img
            key={activeTrainer.name}
            className="hero-photo"
            src={activeTrainer.photo}
            alt={activeTrainer.name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div className="hero-photo-fallback">{activeTrainer.initials}</div>

          {/* Scrim overlay */}
          <div className="hero-scrim" />

          {/* Content wrapper (flex column) */}
          <div className="hero-content-wrapper">
            {/* Main content - pushed up */}
            <div className="hero-content">
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                {activeTrainer.title.toUpperCase()}
              </span>

              <h3 className="hero-tagline">{activeTrainer.tagline}</h3>
              <p className="hero-subtext">{activeTrainer.subtext}</p>

              <p className="hero-quote">"{activeTrainer.quote}"</p>
            </div>

            {/* Marquee at bottom - full width */}
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {MARQUEE_TRAINERS.map((t, i) => (
                  <button
                    type="button"
                    className={`mini-trainer-card ${
                      activeTrainer.name === t.name ? "active" : ""
                    }`}
                    key={i}
                    onClick={() => setActiveTrainer(t)}
                  >
                    <img
                      className="mini-trainer-photo"
                      src={t.thumb}
                      alt={t.name}
                    />
                    <div className="mini-trainer-info">
                      <span className="mini-trainer-name">{t.name}</span>
                      <span className="mini-trainer-title">{t.title}</span>
                      <span className="mini-trainer-stat">{t.stat}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats - bottom right */}
          <div className="hero-stat-row">
            {activeTrainer.heroStats.map((s) => (
              <div className="hero-stat-chip" key={s.label}>
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}