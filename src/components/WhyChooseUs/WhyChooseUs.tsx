import "./WhyChooseUs.css";
import whyChooseImg from "../../assets/images/whychooseus.png";

export default function WhyChooseUs() {
  const cards = [
    { icon: "👔", title: "Professional Staff", desc: "Trained and experienced cleaners who handle every fabric with care." },
    { icon: "🌱", title: "Eco-Friendly Solutions", desc: "Safe cleaning products that protect your clothes and the environment." },
    { icon: "🧼", title: "Advanced Technology", desc: "Modern cleaning equipment ensuring spotless results every time." },
    { icon: "💰", title: "Affordable Pricing", desc: "Premium service at fair, transparent rates." },
    { icon: "⚡", title: "Fast Turnaround", desc: "Quick and efficient service with 24–48 hour delivery." },
    { icon: "⭐", title: "100% Satisfaction", desc: "Your happiness is our top priority — guaranteed." },
  ];

  return (
    <section className="why-choose-us-section">
      <h2 className="why-choose-us-title">Why Choose Us</h2>

      <div className="why-choose-us-layout">
        {/* Left Image */}
        <div className="why-choose-us-image-wrapper">
          <img src={whyChooseImg} alt="Clean N Dry Why Choose Us" className="why-choose-us-image" />
        </div>

        {/* Right Cards */}
        <div className="why-choose-us-card-grid">
          {cards.map((item) => (
            <div key={item.title} className="why-choose-us-card">
              <div className="why-choose-us-card-icon">{item.icon}</div>
              <h3 className="why-choose-us-card-title">{item.title}</h3>
              <p className="why-choose-us-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
