import React from "react";
import { BrowserRouter as Router,Route, Routes, Link} from "react-router-dom";
import Testi from "./testi";
const BSCaption = () => {
    return (
        <div class="caption text-center">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <a class="btn btn-outline-light btn-lg" href="#course">Lue lisää</a>
            <Router>
                        <Routes>
                            <Route exact path="/testi" element={<Testi/>}>
                            </Route>
                        </Routes>
                        <Link to="/testi">Testi</Link>

                    </Router>
        </div>
        
    );
};

export default BSCaption;
