import React from "react";
import {
  FaCalendarCheck,
  FaTruck,
  FaTshirt,
  FaCheckCircle,
  FaBoxOpen,
} from "react-icons/fa";
import './Process.css';

export default function Process() {
  const steps = [
    {
      icon: FaCalendarCheck,
      title: "Schedule Pickup",
    },
    {
      icon: FaTruck,
      title: "Collection",
    },
    {
      icon: FaTshirt,
      title: "Cleaning",
    },
    {
      icon: FaCheckCircle,
      title: "Quality Check",
    },
    {
      icon: FaBoxOpen,
      title: "Delivery",
    },
  ];

  return (
    <section id="process" className="process-section">

      <h2>Our Process</h2>

      <p>Simple, Fast & Hassle-Free Laundry Experience</p>

      <div className="process-steps">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="process-step">
              {index < steps.length - 1 && <div className="process-step-line" />}

              <div className="process-step-circle">
                <Icon size={28} />
              </div>

              <h4 className="process-step-title">{step.title}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}