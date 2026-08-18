import { useState, useEffect, useRef } from "react";
import "./Testimonial.css";

// Import avatar images
import avatar1 from "../assets/a0.png";
import avatar2 from "../assets/a2.png";
import avatar3 from "../assets/a3.png";
import avatar4 from "../assets/a4.png";
import avatar5 from "../assets/a5.png";

const testimonials = [
  {
    id: "p1",
    name: "Jaya Guna",
    // role: "Member • 2 reviews",
    quote:
      "Very good gym... I totally loved it. All the trainer are very friendly and kind. Satisfied service and positive approach by trainers. Mr.Sathiyaraj is also good person as well as trainer part also. Very neat and clean its place very beautiful ❤️",
    // rating: 5,
    avatar: avatar1,
    date: "6 months ago"
  },
  {
    id: "p2",
    name: "HappY _ KïñG",
    // role: "Member • 2 reviews",
    quote:
      "Good clean and fresh Atmosphere with Modern equipments... Kind and Friendly trainers... One of the best gym at Pondicherry ✨",
    // rating: 5,
    avatar: avatar2,
    date: "5 months ago"
  },
  {
    id: "p3",
    name: "Prabakar Yadava",
    // role: "Member • 4 reviews",
    quote:
      "Very good gym... I totally loved it. All the trainer are very friendly and kind. Satisfied service and positive approach by trainers. Mr.Sathiyaraj is also good person as well as trainer part also. Very neat and clean its place very beautiful ❤️",
    // rating: 5,
    avatar: avatar3,
    date: "5 months ago"
  },
  {
    id: "p4",
    name: "SATHIARAJ R",
    // role: "Member • 4 reviews",
    quote:
      "BYSEN Fitness is easily one of the best gyms in town! The equipment is top-notch and the atmosphere is very motivating. What stands out the most is their perfect training team—they have highly professional male and female trainers who...",
    // rating: 5,
    avatar: avatar4,
    date: "6 months ago"
  },
  {
    id: "p5",
    name: "jaimurthy jaishankar",
    // role: "Member • 4 reviews",
    quote:
      "I am not a person who likes to go to gym... But I am love with this place since I joined... Every second spent here is worth time and money... Really nice gym... Latest equipments makes it a go to place...",
    // rating: 5,
    avatar: avatar5,
    date: "1 week ago"
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const total = testimonials.length;

  const goTo = (index) => {
    const next = ((index % total) + total) % total;
    setCurrentIndex(next);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section
      ref={sectionRef}
      className={`b-tc-section ${isVisible ? "is-visible" : ""}`}
    >
      <style>
        {`
          .b-tc-section {
            opacity: 0;
            transform: translateX(60px);
            transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .b-tc-section.is-visible {
            opacity: 1;
            transform: translateX(0);
          }

          .b-tc-section .b-tc-header,
          .b-tc-section .b-tc-stage,
          .b-tc-section .b-tc-controls {
            opacity: 0;
            transform: translateX(40px);
            transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .b-tc-section.is-visible .b-tc-header {
            opacity: 1;
            transform: translateX(0);
            transition-delay: 0.1s;
          }

          .b-tc-section.is-visible .b-tc-stage {
            opacity: 1;
            transform: translateX(0);
            transition-delay: 0.3s;
          }

          .b-tc-section.is-visible .b-tc-controls {
            opacity: 1;
            transform: translateX(0);
            transition-delay: 0.5s;
          }

          @keyframes bounceIn {
            0% {
              transform: translate(-50%, -50%) translateX(0) scale(0.6) rotate(-6deg);
              opacity: 0.2;
            }
            60% {
              transform: translate(-50%, -50%) translateX(0) scale(1.08) rotate(2deg);
              opacity: 1;
            }
            80% {
              transform: translate(-50%, -50%) translateX(0) scale(0.96) rotate(-1deg);
            }
            100% {
              transform: translate(-50%, -50%) translateX(0) scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          .b-tc-card.is-active {
            animation: bounceIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        `}
      </style>

      <div className="b-tc-glow" />

      <div className="b-tc-container">
        <div className="b-tc-header">
          <span className="b-tc-badge">Member Stories</span>
          <h2 className="b-tc-title">
            What Our <span className="b-tc-orange">Members Say</span>
          </h2>
          <p className="b-tc-desc">
            Real results from real people training on our floor — no
            shortcuts, just consistent work and the right support.
          </p>
          <div className="b-tc-rating-summary">
            <span className="b-tc-rating-number">4.8</span>
            <span className="b-tc-rating-stars">★★★★★</span>
            <span className="b-tc-rating-count">45 reviews</span>
          </div>
        </div>

        <div className="b-tc-stage">
          {testimonials.map((t, idx) => {
            let offset = idx - currentIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            if (Math.abs(offset) > 1) return null;

            const isActive = offset === 0;
            const scale = isActive ? 1 : 0.82;
            const translateX = offset * 260;
            const zIndex = isActive ? 3 : 1;
            const opacity = isActive ? 1 : 0.55;

            return (
              <div
                key={isActive ? `active-${currentIndex}` : t.id}
                className={`b-tc-card ${isActive ? "is-active" : ""}`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
                onClick={() => !isActive && goTo(idx)}
              >
                {isActive ? (
                  <>
                    <div className="b-tc-avatar-overlap">
                      <img src={t.avatar} alt={t.name} loading="lazy" />
                    </div>
                    <h3 className="b-tc-name-active">{t.name}</h3>
                    <p className="b-tc-role-active">{t.role}</p>
                    <div className="b-tc-stars">{renderStars(t.rating)}</div>
                    <p className="b-tc-quote-active">"{t.quote}"</p>
                    <span className="b-tc-date">{t.date}</span>
                  </>
                ) : (
                  <>
                    <div className="b-tc-side-top">
                      <div className="b-tc-avatar-inline">
                        <img src={t.avatar} alt={t.name} loading="lazy" />
                      </div>
                      <div>
                        <p className="b-tc-name-side">{t.name}</p>
                        <p className="b-tc-role-side">{t.role}</p>
                        <div className="b-tc-stars-small">{renderStars(t.rating)}</div>
                      </div>
                    </div>
                    <p className="b-tc-quote-side">"{t.quote}"</p>
                    <span className="b-tc-date-side">{t.date}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="b-tc-controls">
          <button
            className="b-tc-arrow"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="b-tc-dots">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                className={`b-tc-dot ${idx === currentIndex ? "is-active" : ""}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className="b-tc-arrow"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}