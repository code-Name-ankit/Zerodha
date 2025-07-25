import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(0);


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link 
                  style={{ textDecoration: "none" }}
                   onClick={() => handleMenuClick(0)}
                class="nav-link active" to="/Signup">
                  <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Signup
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link 
                 style={{ textDecoration: "none" }}
                 onClick={() => handleMenuClick(1)}
                class="nav-link active" to="/About">
                  <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  About
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link 
                 style={{ textDecoration: "none" }}
                onClick={() => handleMenuClick(2)}
                class="nav-link active" to="/Product">
                  <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Product
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link 
                 style={{ textDecoration: "none" }}
                onClick={() => handleMenuClick(3)}
                class="nav-link active" to="/Pricing">
                  <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Pricing
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link 
                 style={{ textDecoration: "none" }}
                onClick={() => handleMenuClick(4)}
                class="nav-link active" to="/Support">
                  <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Support
                  </p>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;