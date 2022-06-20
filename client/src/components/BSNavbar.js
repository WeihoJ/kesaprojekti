import React from "react";
import Logo from "../assets/img/logo/Logo dark.png";
import axios from "axios";

const BSNavbar = ({ isLoggedIn, setIsLoggedIn }) => {

    axios.defaults.withCredentials = true;

    function logout() {
        axios.post("http://localhost:3001/api/logout").then((response) => {
            setIsLoggedIn(false);
        });
    }

    return (
        <nav class="navbar navbar-expand-lg bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand text-warning" href="/">
                    <img src={Logo} alt="" />
                </a>
                <button
                    class="navbar-toggler justify-content-end"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div
                    class="collapse navbar-collapse justify-content-md-end"
                    id="navbarNavDropdown"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">
                                Etusivu
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/koira">
                                Esimerkkisivu
                            </a>
                        </li>


                        {isLoggedIn ? (
                            <li class="nav-item">
                                <button
                                    type="button"
                                    class="btn"
                                    onClick={logout}
                                >
                                    Kirjaudu ulos
                                </button>
                                <button
                                    type="button"
                                    class="btn"
                                >
                                    <a href="/intranet" className="removeUnderline">Intranet</a>
                                </button>
                            </li>

                        ) : (
                            <li class="nav-item">
                                <button
                                    type="button"
                                    class="btn"
                                >
                                    <a
                                        href="/kirjaudu"
                                        className="removeUnderline"
                                    >
                                        Kirjaudu sisään
                                    </a>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default BSNavbar;
