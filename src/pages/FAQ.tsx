import React, { useState } from "react";
import "./FAQ.css";
import logo from "../assets/images/logo.png";
import Footer from "../components/Footer/Footer";

const faqs = [
  {
    question: "What is dry cleaning?",
    answer:
      "Dry cleaning is cleaning clothes and fabrics with liquids other than water. At Clean & Dry, we use eco-friendly Lagoon technology, Woolmark certified."
  },
  {
    question: "What dry cleaning services does Clean & Dry provide?",
    answer:
      "We provide dry cleaning for haute couture, bridal wear, silk sarees, woolens, suits, lehengas, carpets, blankets, curtains, blinds, soft toys, bags, and leather jackets. We also provide steam iron, raffu (darning), and color dyeing."
  },
  {
    question: "Why is Clean & Dry the best dry cleaner?",
    answer:
      "Trusted by 10k+ customers across 15+ cities, we use Lagoon technology to prevent shrinkage and color bleeding, remove 99% stains, and brighten whites with our Whitex process."
  },
  {
    question: "How to avail services from a Clean & Dry shop?",
    answer:
      "You can schedule an online pickup via www.thecleandry.com or our mobile app (Android/iOS). We also provide free home pickup & delivery."
  },
  {
    question: "Does Clean & Dry provide dry clean with same day or 24 hrs delivery?",
    answer:
      "Standard delivery is within 3 days. Express/urgent delivery is available same day or next day."
  },
  {
    question: "Does Clean & Dry provide free home delivery?",
    answer:
      "Yes, free home pickup and delivery is available across India (T&C apply)."
  },
  // ✅ Continue adding the rest of your FAQ items here
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq-section">
        {/* Header */}
        <div className="faq-header">
          <img src={logo} alt="Clean & Dry Logo" className="faq-logo" />
          <h1>FAQs</h1>
          <p className="faq-subtitle">
            Know more about Clean & Dry – India’s best laundry & dry clean chain
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {/* ✅ Down arrow indicator */}
                <span className={`arrow ${openIndex === index ? "rotate" : ""}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
