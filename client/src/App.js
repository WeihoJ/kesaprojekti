import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import BSNavbar from "./components/BSNavbar.js";
import axios from "axios";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Footer from "./components/Footer";

const App = () => {
    const [fetchData, setFetchData] = useState([]);
    const [pyyntoFetchData, setPyyntoFetchData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState("");
    const [loggedUserRole, setLoggedUserRole] = useState("");

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios
            .get("http://localhost:3001/api")
            .then((response) => setFetchData(response.data))
            .catch((error) => console.log(error));
    }, []);
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:3001/pyynnot")
    //         .then((response) => setPyyntoFetchData(response.data))
    //         .catch((error) => console.log(error));
    // }, []);
    

    useEffect(() => {
        axios.get("http://localhost:3001/api/checklogin").then((response) => {
            // console.log(response.data.loggedIn);
            if (response.data.loggedIn) {
                console.log(response.data)
                setIsLoggedIn(true);
                setLoggedUser(response.data.user);
                setLoggedUserRole(response.data.userRole);
            } else {
                setIsLoggedIn(false);
                setLoggedUser("");
                setLoggedUserRole("");
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
                <BSNavbar />
                <Navbar navLink={fetchData} isLoggedIn={isLoggedIn}/>
                <h3>Kirjautunut käyttäjällä <span className="bold">{loggedUser}</span>, käyttäjän rooli <span className="bold">{loggedUserRole}</span></h3>
                <Register />
                <button onClick={logout} >Kirjaudu ulos</button>
                <Login />
                <Footer navLink={pyyntoFetchData}/>
            </div>
        );
    } else {
        return (
            <div>
                <BSNavbar />
                <Navbar navLink={fetchData} isLoggedIn={isLoggedIn}/>
                <h3>Ei kirjautunut</h3>
                <Login />
                <Register />
                <Footer navLink={pyyntoFetchData}/>
            </div>
        );
    }
};

export default App;
