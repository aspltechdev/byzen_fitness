import { useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: "w1",
    name: "William Smith",
    role: "Homemaker",
    quote:
      "Every session at Bysen pushes me further than I thought possible — the coaching here is next level.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "s1",
    name: "Sarah Brown",
    role: "Teacher",
    quote:
      "The trainers at Bysen make fitness enjoyable and easy to follow — I can't recommend this place enough!",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "j1",
    name: "Jake Donovan",
    role: "Homemaker",
    quote:
      "Working with the Bysen coaches has been amazing. Their guidance inspires real progress and real results.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "p1",
    name: "Priya Nair",
    role: "College Student",
    quote:
      "Bysen turned my inconsistent workouts into an actual routine I look forward to every week.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "m1",
    name: "Marcus Lee",
    role: "College Student",
    quote:
      "The energy on the floor at Bysen keeps me accountable — best decision I made this year.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // start on Sarah Brown, centered

  const total = testimonials.length;

  const goTo = (index) => {
    const next = ((index % total) + total) % total;
    setCurrentIndex(next);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  return (
    <section className="b-tc-section">
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
        </div>

        <div className="b-tc-stage">
          {testimonials.map((t, idx) => {
            // shortest signed distance from the active card, accounting for wraparound
            let offset = idx - currentIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            // only render the active card and its immediate neighbours
            if (Math.abs(offset) > 1) return null;

            const isActive = offset === 0;
            const scale = isActive ? 1 : 0.82;
            const translateX = offset * 260;
            const zIndex = isActive ? 3 : 1;
            const opacity = isActive ? 1 : 0.55;

            return (
              <div
                key={t.id}
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
                    <p className="b-tc-quote-active">{t.quote}</p>
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
                      </div>
                    </div>
                    <p className="b-tc-quote-side">{t.quote}</p>
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