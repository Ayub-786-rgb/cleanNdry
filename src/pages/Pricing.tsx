import React from "react";
import "./pricing.css";
import Footer from "../components/Footer/Footer";
import pricinghero from "../assets/images/pricinghero.png";
import pricingsteam from "../assets/images/pricingsteam.png";

const laundryServices = [
  { item: "Wash & Steam Iron", reg: "₹130/Kg", offer: "₹104/Kg" },
  { item: "Wash & Fold", reg: "₹95/Kg", offer: "₹84/Kg" },
  { item: "Premium Laundry", reg: "₹210/Kg", offer: "₹210/Kg" },
  { item: "Woolen Laundry", reg: "₹185/Kg", offer: "₹185/Kg" },
];

const mensWearNew = [
  { item: "Shirt / T-Shirt", reg: "₹25/₹25", offer: "₹20/₹20" },
  { item: "Trouser / Jeans", reg: "₹25/₹25", offer: "₹20/₹20" },
  { item: "Coat", reg: "₹70", offer: "₹56" },
  { item: "Suit 2 Pcs", reg: "₹95", offer: "₹76" },
  { item: "Suit 3 Pcs", reg: "₹120", offer: "₹96" },
  { item: "Jacket", reg: "₹70+", offer: "₹56+" },
];

const mensWear = [
  { item: "Shirt / T-Shirt", reg: "₹95", offer: "₹76" },
  { item: "Trouser / Jeans", reg: "₹95", offer: "₹76" },
  { item: "Coat", reg: "₹240", offer: "₹192" },
  { item: "Suit 2 Pcs", reg: "₹335", offer: "₹268" },
  { item: "Suit 3 Pcs", reg: "₹430", offer: "₹344" },
  { item: "Jacket", reg: "₹265+", offer: "₹212+" },
];

const household = [
  { item: "S Blanket S/D", reg: "₹265/₹295", offer: "₹212/₹236" },
  { item: "D Blanket S/D", reg: "₹365/₹455", offer: "₹292/₹364" },
  { item: "Bedsheet S/D", reg: "₹120/₹180", offer: "₹96/₹144" },
  { item: "Quilt S/D", reg: "₹295/₹455", offer: "₹236/₹364" },
  { item: "Carpet", reg: "₹45/Sq Ft", offer: "₹36/Sq Ft" },
  { item: "Curtain", reg: "₹160+/Panel", offer: "₹128+/Panel" },
];

const womensWear = [
  { item: "Kurta", reg: "₹120+", offer: "₹96+" },
  { item: "Salwar", reg: "₹150+", offer: "₹120+" },
  { item: "Saree", reg: "₹210+", offer: "₹168+" },
  { item: "Dress", reg: "₹210+", offer: "₹168+" },
  { item: "Lehenga", reg: "₹365+", offer: "₹292+" },
  { item: "Shawl", reg: "₹180+", offer: "₹144+" },
];

const shoes = [
  { item: "Sports", reg: "₹180", offer: "₹144" },
  { item: "Canvas", reg: "₹180", offer: "₹144" },
  { item: "Leather", reg: "₹360", offer: "₹288" },
  { item: "Suede Leather", reg: "₹480", offer: "₹384" },
  { item: "Boots", reg: "₹510+", offer: "₹408+" },
];

export default function Pricing() {
  return (
    <>
      {/* SECTION 1: two buttons */}
      <section className="pricing-wrapper">
        <div className="pricing-image first-image">
          <img src={pricinghero} alt="Pricing Banner" />
          <div className="hero-controls first-controls">
            <button>Check Pricing</button>
            <button>Download Price List</button>
          </div>
        </div>
        <div className="pricing-table-card">
          <h2>Laundry Services</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>
            <tbody>
              {laundryServices.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2: 2x2 grid */}
      <section className="extra-tables">
        <div className="pricing-table-card">
          <h2>Men's Wear</h2>
          <table>
            <thead><tr><th>Item</th><th>Reg Price</th><th>1st Order Price</th></tr></thead>
            <tbody>{mensWear.map(row => (
              <tr key={row.item}><td>{row.item}</td><td>{row.reg}</td><td>{row.offer}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <div className="pricing-table-card">
          <h2>Household</h2>
          <table>
            <thead><tr><th>Item</th><th>Reg Price</th><th>1st Order Price</th></tr></thead>
            <tbody>{household.map(row => (
              <tr key={row.item}><td>{row.item}</td><td>{row.reg}</td><td>{row.offer}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <div className="pricing-table-card">
          <h2>Women's Wear</h2>
          <table>
            <thead><tr><th>Item</th><th>Reg Price</th><th>1st Order Price</th></tr></thead>
            <tbody>{womensWear.map(row => (
              <tr key={row.item}><td>{row.item}</td><td>{row.reg}</td><td>{row.offer}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <div className="pricing-table-card">
          <h2>Shoes</h2>
          <table>
            <thead><tr><th>Item</th><th>Reg Price</th><th>1st Order Price</th></tr></thead>
            <tbody>{shoes.map(row => (
              <tr key={row.item}><td>{row.item}</td><td>{row.reg}</td><td>{row.offer}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>

       {/* BLUE HEADER */}
      <div className="blue-header">
        <h2>Steam Ironing Service Price List</h2>
      </div>

      {/* SECTION 3: two buttons top, one bottom */}
      <section className="pricing-wrapper">
        <div className="pricing-image third-image">
          <img src={pricingsteam} alt="Steam Pricing Banner" />

          {/* Top buttons */}
          <div className="hero-controls third-top-controls">
            <button>Download Price List</button>
            <button>Schedule Free Pickup</button>
          </div>

          {/* Bottom button */}
          <div className="hero-controls third-bottom-controls">
            <button>Check Pricing</button>
          </div>
        </div>

        <div className="pricing-table-card">
          <h2>Men's Wear</h2>
          <table>
            <thead><tr><th>Item</th><th>Reg Price</th><th>1st Order Price</th></tr></thead>
            <tbody>{mensWearNew.map(row => (
              <tr key={row.item}><td>{row.item}</td><td>{row.reg}</td><td>{row.offer}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>

      <Footer />
    </>
  );
}
