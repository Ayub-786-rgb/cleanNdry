import "./Delivery.css";
import bestImage from "../../assets/images/BestDrycleaning.png";

export default function Delivery() {
  return (
    <section className="best-section">
      <div className="best-container">

        <div className="best-image-wrapper">
          <img
            src={bestImage}
            alt="Clean N Dry Services"
            className="best-image"
          />
        </div>

        <div className="best-content">

          <h2 className="best-title">
            Best Dry Cleaners In Your City
          </h2>

          <ul className="best-list">

            <li>
              <span className="tick">✓</span>
              <span className="best-text">
                Free Pickup & Delivery
              </span>
            </li>

            <li>
              <span className="tick">✓</span>
              <span className="best-text">
                Fabric Safe Cleaning
              </span>
            </li>

            <li>
              <span className="tick">✓</span>
              <span className="best-text">
                Quick Turnaround Time
              </span>
            </li>

            <li>
              <span className="tick">✓</span>
              <span className="best-text">
                Affordable Pricing
              </span>
            </li>

            <li>
              <span className="tick">✓</span>
              <span className="best-text">
                100% Customer Satisfaction
              </span>
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}