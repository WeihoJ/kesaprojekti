import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div>
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
                                <td>{"*".repeat(Math.floor(Math.random() * (10 - 5)) + 5)}</td>
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
