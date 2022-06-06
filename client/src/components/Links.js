import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Testi from "./testi";

const BSCaption = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/testi" element={<Testi />}></Route>
                </Routes>
                <Link to="/testi">Testi</Link>
            </Router>
        </div>
    );
};

export default BSCaption;
