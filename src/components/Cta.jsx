import "./Cta.css";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Cta() {
  return (
    <section className="b-cta-section">
      <div className="b-cta-dots" />

      <div className="b-cta-container">
        <span className="b-cta-badge">Start Today</span>

        <h2 className="b-cta-title">
          Ready To Unlock Your <span className="b-cta-orange">Potential?</span>
        </h2>

        <p className="b-cta-desc">
          Join Bysen today and get full access to our 7,000 sq.ft floor,
          expert coaching, and a community that keeps you showing up.
        </p>

        <div className="b-cta-actions">
          <a href="#membership" className="b-cta-btn-primary">
            Join Now
            <ArrowIcon />
          </a>
          <a href="#programs" className="b-cta-btn-secondary">
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;