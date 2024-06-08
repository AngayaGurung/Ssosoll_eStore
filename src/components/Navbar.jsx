import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => navigate("/log-in");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="collapse navbar-collapse d-flex justify-content-around"
          id="navbarTogglerDemo01"
        >
          <div className="store-logo">
            <NavLink
              className="navbar-brand d-flex align-items-center m-3"
              to="/"
            >
              SandS_eStore
            </NavLink>
          </div>
          <div className="nab-bar-item">
            <ul className="navbar-nav">
              <li className="nav-item active m-3">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "inherit",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item active m-3">
                <NavLink
                  className="nav-link"
                  to="/product"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "inherit",
                  })}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item active m-3">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "inherit",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item active m-3">
                <NavLink
                  className="nav-link"
                  to="/contact-us"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "inherit",
                  })}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="search-section d-flex gap-2">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <button
              className="btn my-2 my-sm-0 m-auto bg-danger text-light"
              onClick={redirectToLogin}
            >
              <i className="bi bi-box-arrow-left"></i>
            </button>
            <div
              className="rounded-circle border border-secondary"
              style={{ width: "100px", height: "50px" }}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
