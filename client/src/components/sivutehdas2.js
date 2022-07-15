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

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

const sisaltoDD = () => {
    return (
        <div>
            <div id="mySidebar" class="sidebar">
                <a
                    href="javascript:void(0)"
                    class="closebtn"
                    onClick={closeNav}
                >
                    &times;
                </a>
                <a href="#" onClick={uusiTekstiJaKuva}>
                    Teksti ja Kuva
                </a>
                <a href="#" onClick={uusiKuvaJaTeksti}>
                    Kuva ja teksti
                </a>
                <a href="#" onClick={uusiTeksti}>
                    Teksti
                </a>
                <a href="#" onClick={uusi4Tekstiä}>
                    4 tekstiä vierekkäin
                </a>
            </div>
            <div id="main">
                <button class="openbtn" onClick={openNav}>
                    <span class="material-symbols-outlined">add</span>
                </button>
            </div>
        </div>
        // <div class="dropdown">
        //     <button
        //         class="btn btn-secondary dropdown-toggle"
        //         type="button"
        //         id="dropdownMenuButton2"
        //         data-bs-toggle="dropdown"
        //         aria-expanded="false"
        //     >
        //         Uusi sisältökohta
        //     </button>
        //     <ul
        //         class="dropdown-menu dropdown-menu-dark"
        //         aria-labelledby="dropdownMenuButton2"
        //     >
        //         <li>
        //             <button
        //                 class="dropdown-item active"
        //                 onClick={uusiTekstiJaKuva}
        //             >
        //                 Teksti ja kuva
        //             </button>
        //         </li>
        //         <li>
        //             <button class="dropdown-item" onClick={uusiKuvaJaTeksti}>
        //                 Kuva ja teksti
        //             </button>
        //         </li>
        //         <li>
        //             <button class="dropdown-item" onClick={uusiTeksti}>
        //                 Teksti
        //             </button>
        //         </li>
        //         {/* <li>
        //             <hr class="dropdown-divider"></hr>
        //         </li> */}
        //         <li>
        //             <button class="dropdown-item" onClick={uusi4Tekstiä}>
        //                 4 tekstiä vierekkäin
        //             </button>
        //         </li>
        //     </ul>
        // </div>
    );
};

const uusiTekstiJaKuva = () => {
    
};

function uusiKuvaJaTeksti() {}

function uusiTeksti() {}

function uusi4Tekstiä() {}

export default Sisaltosivut;
