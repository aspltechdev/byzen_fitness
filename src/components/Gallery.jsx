import "./Gallery.css";

// grouped into 6 columns of 2 — each column's CSS margin-top creates the exact step height
const columns = [
  [
    { id: "g1", alt: "Barbell strength training", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&h=625&q=80" },
    { id: "g2", alt: "Gym floor general view", src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=500&h=625&q=80" },
  ],
  [
    { id: "g3", alt: "Weightlifting session", src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&h=625&q=80" },
    { id: "g4", alt: "Kettlebell workout", src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=500&h=625&q=80" },
  ],
  [
    { id: "g5", alt: "Yoga and mobility session", src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=625&q=80" },
    { id: "g6", alt: "Personal training session", src: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=500&h=625&q=80" },
  ],
  [
    { id: "g7", alt: "Gym interior wide shot", src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=500&h=625&q=80" },
    { id: "g8", alt: "Gym stretching area", src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=500&h=625&q=80" },
  ],
  [
    { id: "g9", alt: "Group training class", src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&h=625&q=80" },
    { id: "g10", alt: "Dumbbell rack detail", src: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=500&h=625&q=80" },
  ],
  [
    { id: "g11", alt: "Boxing training", src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=500&h=625&q=80" },
    { id: "g12", alt: "Runner on treadmill", src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=625&q=80" },
  ],
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-head">
        <div>
          <span className="eyebrow">The Fitness Garage</span>
          <h2>
            Inside the <span>Garage</span>
          </h2>
        </div>
        <p>
          A look at our floor, our equipment, and the people putting in the
          work — every session, every rep.
        </p>
      </div>

      <div className="stairs">
        {columns.map((col, i) => (
          <div className="stair-col" key={i}>
            {col.map((item) => (
              <div className="tile" key={item.id}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <a href="#" className="btn">
          View Full Gallery
        </a>
      </div>
    </section>
  );
}