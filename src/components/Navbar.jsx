import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const total = 25000;

  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item me-3">
          <Link to="/" className="nav-link">
            🍕 Home
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="nav-item me-3">
              <Link to="/profile" className="nav-link">
                🔓 Profile
              </Link>
            </li>
            <li className="nav-item me-3">
              <button className="btn btn-link nav-link" onClick={onLogout}>
                🔒 Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item me-3">
              <Link to="/login" className="nav-link">
                🔐 Login
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/register" className="nav-link">
                🔐 Register
              </Link>
            </li>
          </>
        )}
        <li className="nav-item">🛒 Total: ${total.toLocaleString()}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
