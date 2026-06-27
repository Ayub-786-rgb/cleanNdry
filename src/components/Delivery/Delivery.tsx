import "./Delivery.css";
import bestImage from "../../assets/images/BestDrycleanings.jpeg";

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
                Express Service in 24 Hours
              </span>
            </li>

            <li>
              <span className="tick">✓</span>
              <span className="best-text">
                Premium Service in best Pricing
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