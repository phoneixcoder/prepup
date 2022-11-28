import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Form/SignUp";
import Login from "./Pages/Login/Login";
import {auth} from './firebase';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setIsAuthenticated(true);
      }else{
        setIsAuthenticated(false);
      }
    })
  }, [])

  return (
    <>
      <Router>
        <Navbar authenticate = {isAuthenticated}/>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
