import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div>
            <ul className="navbar-nav">
                {props.navLink.map((user) => {
                    return (
                        <li className="nav-item" key={user.kayttajaid}>
                            <p className="userid">Käyttäjän id: <span>{user.kayttajaid}</span></p>
                            <p className="username">Käyttäjänimi: <span>{user.kayttajanimi}</span></p>
                            <p className="password">Salasana: <span>{user.salasana}</span></p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;