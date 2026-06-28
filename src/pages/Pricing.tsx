import React from "react";
import "./pricing.css";
import Footer from "../components/Footer/Footer";


// Example market-standard pricing (₹ INR)
const pricingData: Record<string, string> = {
  Laundry: "₹60 / kg",
  "Carpet Cleaning": "₹25 / sq.ft",
  "Curtain Cleaning": "₹150 / piece",
  "Shoe Cleaning": "₹500 / pair",
  "Dry Cleaning": "₹200 / item",
  "Bag Cleaning": "₹800 / bag",
  "Soft Toys Cleaning": "₹300 / toy",
  "Sofa Cleaning": "₹400 / seat",
};

interface Service {
  title: string;
  icon: string;
  image: string;
  description: string;
}

interface PricingProps {
  services: Service[];
}

export default function Pricing({ services }: PricingProps) {
  return (
    <>
      <section className="pricing-section">
        <div className="pricing-header">
          <h1>Our Pricing</h1>
          <p>
            Transparent and affordable rates for premium laundry & cleaning
            services.
          </p>
        </div>

        <div className="pricing-grid">
          {services.map((service) => (
            <div key={service.title} className="pricing-card">
              <div className="pricing-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="pricing-content">
                <h3>
                  <span>{service.icon}</span> {service.title}
                </h3>
                <p>{service.description}</p>
                <div className="pricing-rate">
                  {pricingData[service.title] || "Contact for price"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
