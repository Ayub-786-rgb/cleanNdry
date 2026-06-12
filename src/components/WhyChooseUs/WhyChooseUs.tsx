import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const cards = [
    { icon: "⚡", title: "Express Delivery", desc: "Super‑fast turnaround so you’re never left waiting." },
    { icon: "📱", title: "Instant Updates", desc: "Track your order status in real time." },
    { icon: "⭐", title: "Premium Quality", desc: "We use trusted products for lasting freshness." },
    { icon: "💚", title: "Convenience", desc: "Doorstep pickup and delivery at your schedule." },
    { icon: "🤝", title: "Personalized Care", desc: "Every fabric treated with attention and care." },
    { icon: "💰", title: "Affordable Pricing", desc: "Top‑quality service at competitive rates." },
  ];

  return (
    <section className="why-choose-us-section">
      <h2 className="why-choose-us-title">Benefits</h2>

      <div className="why-choose-us-card-grid">
        {cards.map((item) => (
          <div key={item.title} className="why-choose-us-card">
            <div className="why-choose-us-card-icon">{item.icon}</div>
            <h3 className="why-choose-us-card-title">{item.title}</h3>
            <p className="why-choose-us-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
