import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Resources/Navbar/logo.svg";
import Button from "../Button/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import swal from "sweetalert";

const Navbar = ({ authenticate }) => {
  const navigate = useNavigate();
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
      <nav class="navbar mx-5 my-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </a>
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
