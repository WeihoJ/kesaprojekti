import React, { useState } from "react";
import axios from "axios";

const Footer = (tiedot) => {
    const [nimi, setNimi] = useState("");
    const [puhnro, setPuhnro] = useState("");
    const [sposti, setSposti] = useState("");
    const [viesti, setViesti] = useState("");
    const [msg, setMsg] = useState("");

    axios.defaults.withCredentials = true;

    // (async()=>{
    //     let testi=[tiedot[0]];
    //     console.log(testi);
    // })();

    const tallennaPyynto = async (e) => {
        e.preventDefault();

        if (typeof sposti === "undefined" || sposti === "") {
            setMsg("Syötä sähköposti");
        }
        if (typeof viesti === "undefined" || viesti === "") {
            setMsg("Syötä viesti");
        } else {
            setMsg("");
            try {

                let vastaus = await axios.post("http://localhost:3001/yhteydenotto", {
                    nimi, puhnro, sposti, viesti
                });
                setMsg(vastaus.data.message);
            } catch (error) {
                if (error.response) {
                }
            }
        }
    }

    return (
        <footer>
            <div class="container-fluid">
                <div class="text-center FOtsikko">
                    <h1>Ota yhteyttä</h1>
                </div>

                <div class="row">
                    <div class="col order-sm-first order-last">
                        <div class="footerimg">_</div>
                        <ol>
                            <li>
                                <a class="linkNoDec" href="https://www.google.com/maps/place/Ruostekuja+3,+01610+Vantaa/data=!4m2!3m1!1s0x468df7b1ae8f619b:0xbbcdf0f356902197?sa=X&ved=2ahUKEwjAypuvg4f4AhVaAxAIHSz2DlEQ8gF6BAgZEAE">Ruostekuja 3, Vantaa, 01610</a>
                            </li>
                            <li>
                                <a class="linkNoDec" href="tel:09 14890200">09 14890200</a>
                            </li>
                            <li>
                                <a class="linkNoDec" href="mailto:ruosteinenrauta@hotmail.com">ruosteinenrauta@hotmail.com</a>
                            </li>
                        </ol>
                    </div>

                    <div class="col">
                        <div class="row">
                            <div class="col text-center">{msg}</div>
                            <form onSubmit={tallennaPyynto} class="formi">
                                <div class="col"><input placeholder="etu- ja sukunimi" class="footerinput" name="nimi" onChange={(e) => setNimi(e.target.value)}></input></div>
                                <div class="col"><input placeholder="puhelinnumero" class="footerinput" name="puhnro" onChange={(e) => setPuhnro(e.target.value)} type="tel"></input></div>
                                <div class="col"><input placeholder="sähköposti" class="footerinput" name="sposti" onChange={(e) => setSposti(e.target.value)} type="email"></input></div>
                                <div class="col"><input placeholder="viesti" class="footerinput" name="viesti" onChange={(e) => setViesti(e.target.value)}></input></div>
                                <div class="col"><button type="submit" class="formbutton footerinput">Lähetä</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center copyright">Taitaja &#169; 2022</div>
        </footer>

    );
}

export default Footer;
