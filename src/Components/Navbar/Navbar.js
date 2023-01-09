import React from "react";
import logo from "../../Resources/Navbar/logo.svg";
import Button from "../Button/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import swal from "sweetalert";

const Navbar = ({ authenticate }) => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        swal("oops...!", error);
      });
  };
  return (
    <>
      <nav className="navbar mx-5 my-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </a>

          <div className={`text-white text-lg w-1/3 justify-between ${!authenticate ? "!hidden" : "flex"}`}>
            <a href="/upload-notes" className="hover:text-[#F2D059]">Upload Notes</a>
            <a href="/contact-us" className="hover:text-[#F2D059]">Contact Us</a>
            <a href="/about-us" className="hover:text-[#F2D059]">About Us</a>
          </div>

          <Button
            btnclass={authenticate ? "!hidden" : "flex"}
            text="Sign Up"
            link="/signup"
          />
          <div className={!authenticate ? "!hidden" : "flex"} onClick={logOut}>
            <Button
              btnclass={!authenticate ? "!hidden" : "flex"}
              text="Log Out"
              link="/signup"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
