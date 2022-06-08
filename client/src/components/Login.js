import React, { useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    axios.defaults.withCredentials = true;

    const Auth = async (e) => {
        e.preventDefault();

        if (typeof username === "undefined" || username === "") {
            setMsg("Username is required");
        } else if (typeof password === "undefined" || password === "") {
            setMsg("Password is required");
        } else {
            try {
                const vastaus = await axios.post("http://localhost:3001/login", {
                    username,
                    password,
                });
                setMsg(vastaus.data.message);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth p-5 text-center">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form
                                onSubmit={Auth}
                                className="box border border-primary p-3"
                                >
                                <h1>KIRJAUDU SISÄÄN</h1>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-3">
                                    <label className="label">
                                        Email or Username
                                    </label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Username"
                                            onChange={
                                                (e) =>
                                                    setUsername(e.target.value)
                                                // console.log("Username: " + e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="******"
                                            onChange={
                                                (e) =>
                                                    setPassword(e.target.value)
                                                // console.log("Password: " + e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <label className="mt-3"><Link to="/rekisteroidy">Ei käyttäjää? Rekisteröidy</Link></label>
        </section>
    );
};

export default Login;
