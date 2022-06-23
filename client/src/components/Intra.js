import React from "react";
import Navbar from "./Navbar";
import VaihdaTervetulo from "./VaihdaTervetulo";

const Intra = ({navLink, isLoggedIn}) => {
    return (
        <div>
            <Navbar navLink={navLink} isLoggedIn={isLoggedIn} />
            <VaihdaTervetulo/>
        </div>

    );
};

export default Intra;
