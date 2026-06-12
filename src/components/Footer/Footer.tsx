import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-title">Clean N Dry</h3>
        <p>
          Professional laundry and dry‑cleaning services with free pickup and doorstep delivery.  
          Experience quality, convenience, and care — all at competitive prices.
        </p>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Quick Links</h4>
        <ul>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#whychooseus">Benefits</a></li>
          <li><a href="#delivery">Free Pickup & Delivery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Contact</h4>
        <div className="footer-contact">
          <span>📍 Cuttack, India</span>
          <span>📞 <a href="tel:+917609851051">+91 7609851051</a></span>
          <span>💬 <a href="https://wa.me/917609851051" target="_blank" rel="noreferrer">Chat on WhatsApp</a></span>
        </div>
      </div>

      <div className="footer-bottom">© 2026 Clean N Dry — All Rights Reserved</div>
    </footer>
  );
}
