import deliveryImage from "../../assets/images/delivery.png"; // replace with your actual image path
import "../Card/Card.css";
import './Delivery.css';

export default function Delivery() {
  return (
    <section id="delivery" className="delivery-section">
      <div className="delivery-image-wrapper">
        <img
          src={deliveryImage}
          alt="Free Home Pickup & Delivery"
          className="delivery-image"
        />
      </div>

      <div className="delivery-content">
        <h2>Free Home Pickup & Delivery</h2>

        <p>Best Dry Cleaners In Your City With Free Home Pickup & Delivery.</p>

        <div className="delivery-card-grid">
          {[
            { icon: "🚚", title: "Free Pickup", desc: "Doorstep convenience at no extra cost." },
            { icon: "⚡", title: "Express Delivery", desc: "Fast turnaround for your garments." },
            { icon: "💰", title: "Affordable Pricing", desc: "Quality service at fair rates." },
          ].map((item) => (
            <div key={item.title} className="card">
              <div
                style={{
                  fontSize: "32px",
                  color: "#2BB673",
                  marginBottom: "12px",
                }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
