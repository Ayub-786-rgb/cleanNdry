import "./Process.css";
import betterVisual from "../../assets/images/betterthan.png";

import {
  FaTruck,
  FaMoneyBillWave,
  FaMobileAlt,
  FaTshirt,
  FaHeadset
} from "react-icons/fa";

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
              <FaTruck className="better-icon" />
              <span className="better-text">
                Free Pickup & Delivery
              </span>
            </li>

            <li>
              <FaMoneyBillWave className="better-icon" />
              <span className="better-text">
                Transparent Pricing
              </span>
            </li>

            <li>
              <FaMobileAlt className="better-icon" />
              <span className="better-text">
                Real-Time Order Tracking
              </span>
            </li>

            <li>
              <FaTshirt className="better-icon" />
              <span className="better-text">
                Quality Assurance & Garment Care
              </span>
            </li>

            <li>
              <FaHeadset className="better-icon" />
              <span className="better-text">
                Dedicated Customer Support
              </span>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
}