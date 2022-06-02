import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


useEffect(() => {
    axios
        .get("http://localhost:3001/api")
        .then((response) => setFetchData(response.data))
        .catch((error) => console.log(error));
}, []);

<div>
<table class="table table-striped">
<thead>
    <tr>
        <th scope="col">Käyttäjäid</th>
        <th scope="col">Käyttäjänimi</th>
        <th scope="col">Salasana</th>
        <th scope="col">Rooli</th>
    </tr>
</thead>
<tbody>
    {props.navLink.map((user) => {
        return (
            <tr key={user.kayttajaid}>
                <th scope="row">{user.kayttajaid}</th>
                <td>{user.kayttajanimi}</td>
                <td>{user.salasana}</td>
                <td>{user.rooli}</td>
            </tr>
        );
    })}
    
</tbody>
</table>
</div>