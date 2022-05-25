import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";

const App = () => {
    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api")
            .then((response) => response.json())
            .then((json) => setFetchData(json))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Navbar navLink={fetchData} />
        </div>
    );
};

export default App;
