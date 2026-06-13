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
          <button className="hero-btn hero-btn-primary" onClick={() => window.open('https://app.fabklean.com/', '_blank')}>
            <FaCalendarAlt />
            Schedule Free Pickup
          </button>

          <button className="hero-btn hero-btn-secondary" onClick={() => window.open('https://app.fabklean.com/', '_blank')} style={{ border: '2px solid #25d366', background: '#fff', color: '#25d366', cursor: 'pointer' }}>
            <span className="whatsapp-icon-wrapper">
              <FaWhatsapp size={16} />
            </span>
            <span>Chat on WhatsApp</span>
          </button>
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
