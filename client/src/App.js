import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import BSNavbar from "./components/BSNavbar.js";
import axios from "axios";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

const App = () => {
    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/api")
            .then((response) => setFetchData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <BSNavbar />
            <Navbar navLink={fetchData} />
            <Login />
            <Register />
        </div>
    );
};

export default App;
