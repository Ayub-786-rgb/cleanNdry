import "./Process.css";
import betterVisual from "../../assets/images/betterthan.png";

export default function Process() {
  return (
    <section className="better-section">
      <div className="better-container">
        {/* Left Visual */}
        <div className="better-image-wrapper">
          <img
            src={betterVisual}
            alt="Clean N Dry Visual"
            className="better-image"
          />
        </div>

        {/* Right Text */}
        <div className="better-content">
          <h2 className="better-title">What Makes Us Better Than Others</h2>
          <ul className="better-list">
            <li>🚚 Free Pickup & Delivery</li>
            <li>💰 Transparent Pricing</li>
            <li>📱 Real‑Time Order Tracking</li>
            <li>🧺 Quality Assurance & Garment Care</li>
            <li>🤝 Dedicated Customer Support</li>
          </ul>

        
        </div>
      </div>
    </section>
  );
}
