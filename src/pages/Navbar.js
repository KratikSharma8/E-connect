import React from 'react';
import './CSS/navbar.css'; 
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import About from './Aboutus.js';
import Home from './Home.js';
import Articles from './Articles.js';
import Signup from './Signup';
import Login from './Login';
import Dump from './Dump';
import Waste from './Waste';

function Navbar() {
    return (
        <>
        <BrowserRouter className="navbar">
            <Routes>
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="articles" element={<Articles />} />
                <Route path="aboutus" element={<About />} />
                <Route path="dump" element={<Dump />} />
                <Route path="Waste" element={<Waste />} />
                <Route className="navbar-right">
                    <Route path="Login" element={<Login/>}  />
                    <Route path="Signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
        <div className="navbar">
            <a href="Home">Home</a>
            <a href="aboutus">About</a>
            <a href="articles">Articles</a>
            <a href="Waste">Waste</a>
            <a href="Dump">Dump</a>
            <div className="navbar-right">
                <a href="Login">Login</a>
                <a href="Signup">SignUp</a>
            </div>
        </div>
        </>
    );
}

export default Navbar;