import React,{useState} from "react";
import axios from "axios";
import "./footer.css"

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
                        nimi,puhnro,sposti,viesti
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
            <h1 class="centerh1">Ota yhteyttä</h1>
            <div class="grid">
                <div class="griditem gridleft">
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
                <div>
                    <div class="griditem gridright">
                        <div>{msg}</div>
                        <form onSubmit={tallennaPyynto} class="footerform">
                            <label><input placeholder="etu- ja sukunimi" class="footerinput" name="nimi" onChange={(e) =>setNimi(e.target.value)}></input></label>
                            <label><input placeholder="puhelinnumero" class="footerinput" name="puhnro" onChange={(e) =>setPuhnro(e.target.value)} type="tel"></input></label>
                            <label><input placeholder="sähköposti" class="footerinput" name="sposti" onChange={(e) =>setSposti(e.target.value)} type="email"></input></label>
                            <label><input placeholder="viesti" class="footerinput" name="viesti" onChange={(e) =>setViesti(e.target.value)}></input></label>
                            <button type="submit" class="formbutton">Lähetä</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="copyright">Taitaja &#169; 2022</div>
            
            <div class="testijono">
            {/* <table class="table table-striped">
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
            </table> */}
            </div>
        </footer>

    );
    }

export default Footer;
