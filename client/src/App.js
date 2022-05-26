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
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios
            .get("http://localhost:3001/api")
            .then((response) => setFetchData(response.data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/api/checklogin").then((response) => {
            // console.log(response.data.loggedIn);
            if (response.data.loggedIn) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, []);

    function logout() {
        axios.post("http://localhost:3001/api/logout").then((response) => {
            setIsLoggedIn(false);
        });
    }

    if (isLoggedIn) {
        return (
            <div>
                <h1>Kirjautunut</h1>
                <BSNavbar />
                <Navbar navLink={fetchData} isLoggedIn={isLoggedIn}/>
                <Register />
                <button onClick={logout} >Kirjaudu ulos</button>
                <Login />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Ei kirjautunut</h1>
                <BSNavbar />
                <Navbar navLink={fetchData} isLoggedIn={isLoggedIn}/>
                <Login />
                <Register />
            </div>
        );
    }
};

export default App;
