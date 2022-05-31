import React from "react";
import Logo from "../assets/img/logo/Logo dark.png";

const BSNavbar = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-warning" href="#">
                    <img src={Logo} alt="" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-md-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                Etusivu
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/koira">
                                Esimerkkisivu
                            </a>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-outline-warning">
                                Kirjaudu
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default BSNavbar;
