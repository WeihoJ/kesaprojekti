import React from "react";
import Navbar from "./Navbar";

const Intra = ({navLink, isLoggedIn}) => {
    return (
        <div>
            <Navbar navLink={navLink} isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default Intra;
