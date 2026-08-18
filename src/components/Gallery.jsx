import { useState, useMemo } from "react";
import "./Gallery.css";

import g1 from "../assets/l1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/l2.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/l3.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/l4.jpg";
import g8 from "../assets/y1.png";
import g9 from "../assets/l5.jpg";
import g10 from "../assets/g10.jpg";
import g11 from "../assets/l6.jpg";
import g12 from "../assets/l8.jpg";

const items = [
  {
    id: "g1",
    alt: "Barbell strength training",
    category: "Strength",
    src: g1,
  },
  {
    id: "g2",
    alt: "Gym floor general view",
    category: "Facility",
    src: g2,
  },
  {
    id: "g3",
    alt: "Weightlifting session",
    category: "Strength",
    src: g3,
  },
  {
    id: "g4",
    alt: "Kettlebell workout",
    category: "Strength",
    src: g4,
  },
  {
    id: "g5",
    alt: "Yoga and mobility session",
    category: "Mobility",
    src: g5,
  },
  {
    id: "g6",
    alt: "Personal training session",
    category: "Training",
    src: g6,
  },
  {
    id: "g7",
    alt: "Gym interior wide shot",
    category: "Facility",
    src: g7,
  },
  {
    id: "g8",
    alt: "Gym stretching area",
    category: "Mobility",
    src: g8,
  },
  {
    id: "g9",
    alt: "Group training class",
    category: "Training",
    src: g9,
  },
  {
    id: "g10",
    alt: "Dumbbell rack detail",
    category: "Facility",
    src: g10,
  },
  {
    id: "g11",
    alt: "Boxing training",
    category: "Training",
    src: g11,
  },
  {
    id: "g12",
    alt: "Runner on treadmill",
    category: "Strength",
    src: g12,
  },
];

const categories = [
  "All",
  "Strength",
  "Training",
  "Mobility",
  "Facility",
];

// Splits a flat list into N columns
function chunkIntoColumns(list, colCount = 6) {
  const cols = Array.from({ length: colCount }, () => []);

  list.forEach((item, i) => {
    cols[i % colCount].push(item);
  });

  return cols;
}

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? items
        : items.filter((item) => item.category === active),
    [active]
  );

  const columns = useMemo(
    () => chunkIntoColumns(filtered, 6),
    [filtered]
  );

  return (
    <section id="gallery" className="gallery-section">

      {/* Background Image */}
      <div
        className="gallery-bg-wrapper"
        style={{
          backgroundImage: `url(${g4})`,
        }}
      >
        <div className="gallery-bg-overlay"></div>
      </div>

      {/* Gallery Content */}
      <div className="gallery-inner">

        {/* Heading */}
        <div className="gallery-head">
          <div>
            <span className="badge-pill">
              <span className="dot"></span>
              THE FITNESS GARAGE
              <span className="dot"></span>
            </span>

            <h2>
              Inside the <span>Garage</span>
            </h2>
          </div>

          <p>
            A look at our floor, our equipment, and the people putting in the
            work — every session, every rep.
          </p>
        </div>

        {/* Filters */}
        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${
                active === cat ? "active" : ""
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="stairs">
          {columns.map((col, i) => (
            <div className="stair-col" key={i}>
              {col.map((item) => (
                <div className="tile" key={item.id}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
          {/* 
          <a href="#" className="btn">
            View Full Gallery
          </a>
          */}
        </div>

      </div>
    </section>
  );
}