import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import BSNavbar from "./components/BSNavbar.js";
import axios from "axios";
import axiosConfig from "./axiosConfig";
import Login from "./components/Login.js";
import Register from "./components/Register.js";


const App = () => {
    const [fetchData, setFetchData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:3001/api", axiosConfig)
            .then((response) => setFetchData(response.data))
            .catch((error) => console.log(error));
    }, []);

    if (isLoggedIn) {
        return (
            <div>
                <BSNavbar />
                <Navbar navLink={fetchData} />
                <Register />
            </div>
        );
    } else {
        return (
            <div>
                <BSNavbar />
                <Login />
            </div>
        );
    }
};

export default App;
