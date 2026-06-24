import "./Process.css";
import betterVisual from "../../assets/images/betterthan.png";

export default function Process() {
  return (
    <section className="better-section">
      <div className="better-container">

        {/* IMAGE */}
        <div className="better-image-wrapper">
          <img
            src={betterVisual}
            alt="Clean N Dry Visual"
            className="better-image"
          />
        </div>

        {/* CONTENT */}
        <div className="better-content">
          <h2 className="better-title">
            What Makes Us Better Than Others
          </h2>

          <ul className="better-list">

            <li>
              <span className="better-icon">🚚</span>
              Free Pickup & Delivery
            </li>

            <li>
              <span className="better-icon">💰</span>
              Transparent Pricing
            </li>

            <li>
              <span className="better-icon">📱</span>
              Real-Time Order Tracking
            </li>

            <li>
              <span className="better-icon">🧺</span>
              Quality Assurance & Garment Care
            </li>

            <li>
              <span className="better-icon">🤝</span>
              Dedicated Customer Support
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
}