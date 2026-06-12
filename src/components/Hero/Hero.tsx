import heroImage from "../../assets/images/hero.png";
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>
          Professional Cleaning Services
          <br />
          <span>by Clean N Dry</span>
        </h1>

        <p>We Pick Up. We Clean. We Deliver.</p>

        <div className="hero-buttons">
          <button className="hero-btn hero-btn-primary">
            <FaCalendarAlt />
            Schedule Free Pickup
          </button>

          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button className="hero-btn hero-btn-secondary">
              <FaWhatsapp size={20} color="#25D366" />
              <span>Chat on WhatsApp</span>
            </button>
          </a>
        </div>

        <div className="hero-features">
          {["Convenience", "Speed", "Quality", "Care"].map((item) => (
            <span key={item} className="hero-feature-pill">
              <span className="hero-feature-pill-tick">✓</span>
              <span className="hero-feature-pill-text">{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Laundry Service" className="hero-image" />
      </div>
    </section>
  );
}
