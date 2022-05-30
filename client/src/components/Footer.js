import React from "react";
import "./footer.css"

const Footer = () => {
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
                        <form action="" class="footerform">
                            <label><input placeholder="etu- ja sukunimi" class="footerinput"></input></label>
                            <label><input placeholder="puhelinnumero" class="footerinput"></input></label>
                            <label><input placeholder="sähköposti" class="footerinput"></input></label>
                            <label><input placeholder="viesti" class="footerinput"></input></label>
                            <button type="submit" class="formbutton">Lähetä</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="copyright">Taitaja &#169; 2022</div>
        </footer>

    );
};

export default Footer;
