import { useState } from "react";
import "./Socialwall.css";
import { InstagramEmbed } from "react-social-media-embed";

const instagramPosts = [
  "https://www.instagram.com/reel/DUlQu3JCa__/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DT5TPujiXMo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/Db3qfQsPQlQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DbsA9tev1_7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

const youtubeVideos = [
  "n7nXPM3i-fo",
  "gHnWS6BttdQ",
  "eZWs_ZBoVEE",
  "hE3tBpuKCXg",
];

const fillLoop = (arr) => {
  if (arr.length === 0) return [];
  const times = Math.ceil(4 / arr.length);
  const filled = Array.from({ length: times }, () => arr).flat();
  return [...filled, ...filled];
};

export default function SocialWall() {
  const [activeTab, setActiveTab] = useState("instagram");

  return (
    <section className="sw-section">
      <div className="sw-bg-overlay"></div>

      {/* Floating weight plates */}
      {/* <div className="sw-notes" aria-hidden="true">
        <span className="sw-note" style={{ left: "5%", animationDelay: "0s", fontSize: "1.6rem", animationDuration: "9s" }}>◉</span>
        <span className="sw-note" style={{ left: "15%", animationDelay: "1.5s", fontSize: "1.1rem", animationDuration: "11s" }}>◉</span>
        <span className="sw-note" style={{ left: "28%", animationDelay: "3s", fontSize: "2rem", animationDuration: "8s" }}>◉</span>
        <span className="sw-note" style={{ left: "42%", animationDelay: "0.8s", fontSize: "1.3rem", animationDuration: "13s" }}>◉</span>
        <span className="sw-note" style={{ left: "57%", animationDelay: "2.2s", fontSize: "1.8rem", animationDuration: "10s" }}>◉</span>
        <span className="sw-note" style={{ left: "68%", animationDelay: "4s", fontSize: "1rem", animationDuration: "7s" }}>◉</span>
        <span className="sw-note" style={{ left: "78%", animationDelay: "1s", fontSize: "2.2rem", animationDuration: "12s" }}>◉</span>
        <span className="sw-note" style={{ left: "88%", animationDelay: "3.5s", fontSize: "1.4rem", animationDuration: "9s" }}>◉</span>
        <span className="sw-note" style={{ left: "93%", animationDelay: "5s", fontSize: "1.2rem", animationDuration: "14s" }}>◉</span>
      </div> */}

      <div className="sw-container">

        {/* Header */}
        <div className="sw-header">

          <div className="sw-badge">
            <span className="sw-badge-dot"></span>
            <span className="sw-badge-text">FOLLOW THE GRIND</span>
            <span className="sw-badge-dot"></span>
          </div>

          <h2 className="sw-title">
            <span className="sw-title-light">Straight From</span>
            <span className="sw-title-gold"> The Floor</span>
          </h2>

          <div className="sw-title-decor">
            <span className="sw-decor-line"></span>
            <span className="sw-decor-diamond">⬢</span>
            <span className="sw-decor-line"></span>
          </div>

          <p className="sw-subtitle">
            Real lifts, real sweat, real transformations. See what's
            happening on the floor at BYSEN GYM — every rep, every PR,
            every day.
          </p>

          {/* Social Tabs */}
          <div className="sw-tabs">

            <button
              id="sw-tab-instagram"
              className={`sw-tab-btn ${activeTab === "instagram" ? "sw-tab-active" : ""}`}
              onClick={() => setActiveTab("instagram")}
            >
              <span className="sw-tab-text">Instagram</span>
            </button>

            <button
              id="sw-tab-youtube"
              className={`sw-tab-btn ${activeTab === "youtube" ? "sw-tab-active" : ""}`}
              onClick={() => setActiveTab("youtube")}
            >
              <span className="sw-tab-text">YouTube</span>
            </button>

          </div>

        </div>

      </div>

      {/* Marquee Track */}
      <div className="sw-marquee">

        <div className="sw-track">

          {activeTab === "instagram" ? (
            fillLoop(instagramPosts).map((url, index) => (
              <div key={`ig-${index}`} className="sw-card">

                <div className="sw-card-top sw-card-top--instagram">
                  <span>BYSEN GYM</span>
                </div>

                <div className="sw-embed-wrapper">
                  <InstagramEmbed url={url} width="100%" />
                </div>

              </div>
            ))
          ) : activeTab === "youtube" ? (
            fillLoop(youtubeVideos).map((videoId, index) => (
              <div key={`yt-${index}`} className="sw-card sw-card--wide">

                <div className="sw-card-top sw-card-top--youtube">
                  <span>Bysen Gym Official</span>
                </div>

                <div className="sw-embed-wrapper sw-embed-youtube">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube Video ${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="sw-youtube-frame"
                  />
                </div>

              </div>
            ))
          ) : null}

        </div>

      </div>

      {/* Footer CTA */}
      <div className="sw-footer">
        <div className="sw-footer-line"></div>
        <a
          href={
            activeTab === "instagram"
              ? "https://www.instagram.com/bysengym/"
              : "https://www.youtube.com/@bysengym"
          }
          target="_blank"
          rel="noreferrer"
          className="sw-follow-btn"
        >
          Check us on {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </a>
        <div className="sw-footer-line"></div>
      </div>

    </section>
  );
}