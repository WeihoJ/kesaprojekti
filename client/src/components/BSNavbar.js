import React from "react";
import Logo from "../assets/img/logo/Logo light.png";

const BSNavbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
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
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                class="nav-link text-warning"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning" href="/koira">
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning" href="#">
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle text-warning"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown link
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a
                                        class="dropdown-item text-danger"
                                        href="#"
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item text-danger"
                                        href="#"
                                    >
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item text-danger"
                                        href="#"
                                    >
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default BSNavbar;
