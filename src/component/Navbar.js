import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container text-center  ">
      <div className="d-flex justify-content-center mt-1">
        <h1 className="text-dark me-2">COLLECTION</h1>
      </div>

      <nav className="navbar navbar-expand-lg py-3 bg-secondary shadow-sm rounded d-flex justify-content-end">
        <ul className="d-flex justify-content-end mt-3">
          <li className="nav-item ">
            <NavLink className="text-light" to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="text-light" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-light" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <div className="buttons">
          <Link to="/cart" className="btn btn-outline-dark ms-1">
            <FaShoppingCart className="text-danger me-1" />
            Orders
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
