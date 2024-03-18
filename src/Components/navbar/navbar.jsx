/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react"; // Keep the useState import

import navbarStyles from "../Styles/navbar.module.css";
import Logo from "./assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Define the isOpen state variable

  // Define the toggleMenu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={navbarStyles.nav}>
      <img src={Logo} alt="Logo" className={navbarStyles.logo} />

      <button className={navbarStyles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <nav
        className={`${navbarStyles.menuItems} ${
          isOpen ? navbarStyles.open : ""
        }`}
      >
        <a href="#">ABOUT</a>
        <a href="#">SPEAKERS</a>
        <a href="#">FAQ</a>
        <a href="#">CONTACT</a>
      </nav>
    </div>
  );
}

export default Navbar;
