import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");

    axios.defaults.withCredentials = true;

    const Register = async (e) => {
        e.preventDefault();

        console.log("Name: " + name);
        console.log("Password: " + password);
        console.log("Confirm Password: " + confPassword);
        console.log("Role: " + role);

        if (typeof role === "undefined" || role === "") {
            setMsg("Role is required");
        }
        if (typeof name === "undefined" || name === "") {
            setMsg("Name is required");
        }
        if (typeof password === "undefined" || password === "") {
            setMsg("Password is required");
        } else {
            if (password !== confPassword) {
                setMsg("Passwords do not match");
            } else {
                setMsg("");
                try {

                    let vastaus = await axios.post("http://localhost:3001/register", {
                        name,
                        password,
                        role,
                    });
                    setMsg(vastaus.data.message);
                } catch (error) {
                    if (error.response) {
                    }
                }
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth text-center">
            <div className="hero-body p-4">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form
                                onSubmit={Register}
                                className="box border border-warning p-5"
                            >
                                <h1>REGISTER NEW USER</h1>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Name"
                                            onChange={(e) =>
                                                setName(e.target.value)
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
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">
                                        Confirm Password
                                    </label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="******"
                                            onChange={(e) =>
                                                setConfPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">
                                        User role
                                    </label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="admin"
                                            onChange={(e) =>
                                                setRole(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
