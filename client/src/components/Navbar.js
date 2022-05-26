import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div>
            {/* <ul className="navbar-nav">
                {props.navLink.map((user) => {
                    return (
                        <li className="nav-item" key={user.kayttajaid}>
                            <p className="userid">Käyttäjän id: <span>{user.kayttajaid}</span></p>
                            <p className="username">Käyttäjänimi: <span>{user.kayttajanimi}</span></p>
                            <p className="password">Salasana: <span>{user.salasana}</span></p>
                        </li>
                    );
                })}
            </ul> */}

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Käyttäjäid</th>
                        <th scope="col">Käyttäjänimi</th>
                        <th scope="col">Salasana</th>
                        <th scope="col">Rooli</th>
                    </tr>
                </thead>
                <tbody>
                    {props.navLink.map((user) => {
                        return (
                            <tr key={user.kayttajaid}>
                                <th scope="row">{user.kayttajaid}</th>
                                <td>{user.kayttajanimi}</td>
                                <td>{user.salasana}</td>
                                <td>{user.rooli}</td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
    );
};

export default Navbar;
