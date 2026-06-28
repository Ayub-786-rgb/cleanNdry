import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import "./Navbar.css";

// Import your logo
import logo from "../../assets/images/logof.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // close menu on route change
  }, [location.pathname]);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <NavLink to="/" className="logo">
        <img
          src={logo}
          alt="Clean N Dry Logo"
          className="navbar-logo-img"
        />
      </NavLink>

      {/* HAMBURGER (mobile only via CSS) */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* MENU */}
      <ul className={`menu ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={({ isActive }) => (isActive ? "active" : "")}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" className={({ isActive }) => (isActive ? "active" : "")}>
            Store Locator
          </NavLink>
        </li>
        <li>
          <NavLink to="/franchise" className={({ isActive }) => (isActive ? "active" : "")}>
            Get Franchise
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blogs
          </NavLink>
        </li>
      </ul>

      {/* ACTION BUTTON */}
      <div className="actions">
        <button
          className="btn"
          onClick={() => window.open("https://app.fabklean.com/", "_blank")}
        >
          <FaCalendarAlt style={{ marginRight: 8 }} />
          Schedule Free Pickup
        </button>
      </div>
    </nav>
  );
}
