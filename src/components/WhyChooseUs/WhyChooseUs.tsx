import "./WhyChooseUs.css";
import whyChooseImg from "../../assets/images/whychooseuss.jpeg";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: "🏅",
      title: "Hohenstein Certified Machinery",
      desc: "Prevents colour loss and fabric shrinkage, keeping garments looking new for longer."
    },
    {
      icon: "🧶",
      title: "Woolmark Certified Machinery",
      desc: "Specialized machinery to safely process delicate fabrics and woollen garments."
    },
    {
      icon: "🛡️",
      title: "Hygiene in Focus",
      desc: "Separate wash cycle for every customer with complete sanitization for maximum hygiene."
    },
    {
      icon: "🌿",
      title: "German Eco-Friendly Cleaning Solutions",
      desc: "Tough on stains while remaining gentle on fabrics and environmentally responsible."
    },
    {
      icon: "👔",
      title: "Professional Staff",
      desc: "Professionally trained experts who handle every garment with care and precision."
    },
    {
      icon: "💳",
      title: "Transparent Pricing",
      desc: "Premium laundry services at the best price with completely transparent pricing."
    },
    {
      icon: "🧺",
      title: "Premium Garment Care",
      desc: "Every garment is inspected, cleaned and finished with exceptional attention to detail."
    },
    {
      icon: "❤️",
      title: "Customer First Approach",
      desc: "Cleaning with care, delivering with trust."
    }
  ];

  return (
    <section className="why-choose-us-section">

      <h2 className="why-choose-us-title">
        Why Choose Us
      </h2>

      <div className="why-choose-us-layout">

        {/* LEFT IMAGE */}

        <div className="why-choose-us-image-wrapper">

          <img
            src={whyChooseImg}
            alt="Why Choose Clean N Dry"
            className="why-choose-us-image"
          />

        </div>

        {/* RIGHT CARDS */}

        <div className="why-choose-us-card-list">

          {cards.map((item) => (

            <div
              key={item.title}
              className="why-choose-us-card"
            >

              <div className="why-choose-us-card-icon">
                {item.icon}
              </div>

              <div className="why-choose-us-card-content">

                <h3 className="why-choose-us-card-title">
                  {item.title}
                </h3>

                <p className="why-choose-us-card-desc">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}