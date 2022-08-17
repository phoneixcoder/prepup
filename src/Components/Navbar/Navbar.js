import React from "react";
import logo from "../../Resources/Navbar/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav class="navbar mx-5 my-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </a>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
