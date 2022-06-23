import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [tervetuloteksti, setTervetuloteksti] = useState("");
    const [msg, setMsg] = useState("");

    axios.defaults.withCredentials = true;

    const Tervetulo = async (e) => {
        e.preventDefault();

        if (typeof tervetuloteksti === "undefined" || tervetuloteksti === "") {
            setMsg("Syötä tervetuloteksti");
        } else {
            try {
                const vastaus = await axios.post("http://localhost:3001/tervetuloa",{tervetuloteksti}
                );
                setMsg("Tervetuloteksti muutettiin!");
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
                                onSubmit={Tervetulo}
                                className="box border border-primary p-3"
                            >
                                <h1>Vaihda tervetulo</h1>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-3">
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Tervetuloa"
                                            onChange={
                                                (e) =>
                                                    setTervetuloteksti(e.target.value)
                                                // console.log("Username: " + e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">
                                        Vaihda
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

export default Login;
