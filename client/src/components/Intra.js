import React from "react";
import Navbar from "./Navbar";
import VaihdaTervetulo from "./VaihdaTervetulo";
import Sisaltosivut from "./Sisaltosivut";

const Intra = ({navLink, isLoggedIn, sivut}) => {
    return (
        <div>
            <Navbar navLink={navLink} isLoggedIn={isLoggedIn} />
            <VaihdaTervetulo/>
            <Sisaltosivut sivut={sivut}/>
        </div>

    );
};

export default Intra;
