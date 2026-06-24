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
              Free Pickup & Delivery
            </li>

            <li>
              <span className="tick">✓</span>
              Fabric Safe Cleaning
            </li>

            <li>
              <span className="tick">✓</span>
              Quick Turnaround Time
            </li>

            <li>
              <span className="tick">✓</span>
              Affordable Pricing
            </li>

            <li>
              <span className="tick">✓</span>
              100% Customer Satisfaction
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}