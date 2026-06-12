import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">Clean N Dry</div>

      {/* HAMBURGER (mobile only via CSS) */}
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* MENU */}
      <ul className={`menu ${open ? 'open' : ''}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/process" className={({ isActive }) => (isActive ? 'active' : '')}>
            Process
          </NavLink>
        </li>

        <li>
          <NavLink to="/benefits" className={({ isActive }) => (isActive ? 'active' : '')}>
            Benefits
          </NavLink>
        </li>
      </ul>

      {/* ACTION BUTTON */}
      <div className="actions">
        <button className="btn"><FaCalendarAlt style={{ marginRight: 8 }} />Schedule Free Pickup</button>
      </div>
    </nav>
  );
}