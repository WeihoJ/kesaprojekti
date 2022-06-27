import React from "react";
// import tekstiJaKuva from "../assets/img/sivutehdas/tekstiJaKuva.png";
// import kuvaJaTeksti from "../assets/img/sivutehdas/kuvaJaTeksti.png";
// import neljatekstia from "../assets/img/sivutehdas/4tekstia.png";

const Sisaltosivut = () => {
    return (
        <div class="p-top-76">
            {sisaltoDD()}
            <div id="sisalto"></div>
        </div>
    );
};

const sisaltoDD = () => {
    return (
        <div class="dropdown">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Uusi sisältökohta
            </button>
            <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
            >
                <li>
                    <button
                        class="dropdown-item active"
                        onClick={uusiTekstiJaKuva()}
                    >
                        Teksti ja kuva
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" onClick={uusiKuvaJaTeksti()}>
                        Kuva ja teksti
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" onClick={uusiTeksti()}>
                        Teksti
                    </button>
                </li>
                {/* <li>
                    <hr class="dropdown-divider"></hr>
                </li> */}
                <li>
                    <button class="dropdown-item" onClick={uusi4Tekstiä()}>
                        4 tekstiä vierekkäin
                    </button>
                </li>
            </ul>
        </div>
    );
};

const uusiTekstiJaKuva = () => {
    const sisältö = document.getElementById("sisalto");
    // sisältö.innerHTML = "OKSODKASO"
};

function uusiKuvaJaTeksti() {}

function uusiTeksti() {}

function uusi4Tekstiä() {}

export default Sisaltosivut;
