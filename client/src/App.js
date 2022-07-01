import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import BSNavbar from "./components/BSNavbar.js";
import BSInfo from "./components/BSInfo";
import axios from "axios";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Footer from "./components/Footer";
import Intra from "./components/Intra";
import Koti from "./pages/koti";
import Blogs from "./components/Blogs";
import Sivutehdas from "./components/sivutehdas";
import Sivutehdas2 from "./components/sivutehdas2";
import Sisalto from "./components/Sisalto";
import SisaltosivuPohja from "./components/SisaltosivuPohja";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
    const [fetchData, setFetchData] = useState([]);
    const [pyyntoFetchData, setPyyntoFetchData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState("");
    const [loggedUserRole, setLoggedUserRole] = useState("");
    const [sivutFetchData, setSivutFetchData] = useState([]);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios
            .get("http://localhost:3001/api")
            .then((response) => setFetchData(response.data))
            .catch((error) =>
                console.log(
                    "Palvelin ei päällä tai ei anna vastausta api pyyntöön" +
                        error
                )
            );
    }, []);
    useEffect(() => {
        axios
            .get("http://localhost:3001/sivut")
            .then((response) => setSivutFetchData(response.data))
            // .then(console.log(sivutFetchData))
            .catch((error) =>
                console.log(
                    "Palvelin ei päällä tai ei anna vastausta api pyyntöön" +
                        error
                )
            );
    }, []);
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:3001/pyynnot")
    //         .then((response) => setPyyntoFetchData(response.data))
    //         .catch((error) => console.log(error));
    // }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/checklogin")
            .then((response) => {
                // console.log(response.data.loggedIn);
                if (response.data.loggedIn) {
                    setIsLoggedIn(true);
                    setLoggedUser(response.data.user);
                    setLoggedUserRole(response.data.userRole);
                } else {
                    setIsLoggedIn(false);
                    setLoggedUser("");
                    setLoggedUserRole("");
                }
            })
            .catch((error) =>
                console.log(
                    "Palvelin ei päällä tai ei anna vastausta api pyyntöön" +
                        error
                )
            );
    }, []);

    function logout() {
        axios.post("http://localhost:3001/api/logout").then((response) => {
            setIsLoggedIn(false);
        });
    }

    return (
        <div>
            <BSNavbar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                logout={logout}
            />
            <Router>
                <Routes>
                    {/* <Route
                        exact
                        path="/kaikkiKayttajat"
                        element={
                            <Navbar
                                navLink={fetchData}
                                isLoggedIn={isLoggedIn}
                            />
                        }
                    ></Route> */}
                    <Route exact path="" element={<Koti />}></Route>
                    <Route
                        exact
                        path="rekisteroidy"
                        element={<Register />}
                    ></Route>

                    {sivutFetchData.map((sivu) => {
                        return (
                            <Route
                                exact
                                path={sivu.sivun_url}
                                element={<SisaltosivuPohja sivu={sivu} />}
                            >
                                {" "}
                            </Route>
                        );
                    })}

                    {/* <Route exact path="blog" element={<Blogs />}></Route> */}
                    <Route path="sisalto/:url" element={<Sisalto />}></Route>
                    <Route exact path="kirjaudu" element={<Login />}></Route>
                    {isLoggedIn ? (
                        <Route
                            exact
                            path="intranet"
                            element={
                                <Intra
                                    navLink={fetchData}
                                    isLoggedIn={isLoggedIn}
                                    sivut={sivutFetchData}
                                />
                            }
                        ></Route>
                    ) : (
                        <Route
                            exact
                            path="intranet"
                            element={<Login />}
                        ></Route>
                    )}
                    {isLoggedIn ? (
                        <Route
                            exact
                            path="/uusiSivu"
                            element={<Sivutehdas />}
                        ></Route>
                    ) : (
                        <Route
                            exact
                            path="/uusiSivu"
                            element={<Login />}
                        ></Route>
                    )}
                    {isLoggedIn ? (
                        <Route
                            exact
                            path="/uusiSivu2"
                            element={<Sivutehdas2 />}
                        ></Route>
                    ) : (
                        <Route
                            exact
                            path="/uusiSivu2"
                            element={<Login />}
                        ></Route>
                    )}
                </Routes>
            </Router>
            {/* {isLoggedIn ? (
                <h3>
                    Kirjautunut käyttäjällä{" "}
                    <span className="bold">{loggedUser}</span>, käyttäjän rooli{" "}
                    <span className="bold">{loggedUserRole}</span>
                </h3>
            ) : (
                <h3>Ei kirjautunut</h3>
            )} */}
            <Footer navLink={pyyntoFetchData} />
        </div>
    );
};

export default App;
