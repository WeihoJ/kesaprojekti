import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Tervetuloteksti = (props) => {
    const [ tervetuloTeksti, setTervetuloTeksti ] = useState(
        "Tervetuloa sivullemme"
    );
    console.log(tervetuloTeksti);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/tervetuloa")
            .then((response) => {
                console.log(response.data.tervetuloviesti);
                if (response.data.status == "virheellinen") {
                    setTervetuloTeksti(
                        "Tervetuloa sivullemme, jossa ilmeisesti tervetulotekstiä ei ole olemassa..."
                    );
                } else if (response.data.status == "oikein") {
                    setTervetuloTeksti(response.data.tervetuloviesti);
                }
            })
            .catch((error) =>
                console.log(
                    "Palvelin ei päällä tai ei anna vastausta api pyyntöön => \n" +
                        error
                )
            );
    }, []);

    console.log(tervetuloTeksti);

    return (
        <div>
            <h1>{tervetuloTeksti}</h1>
        </div>
    );
};

export default Tervetuloteksti;
