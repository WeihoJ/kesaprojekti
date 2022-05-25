const cors = require("cors");
const mysql = require("mysql");
const session = require('cookie-session');
const express = require("express");
const app = express();


const { port, host } = require("./config.json");


const Tietovarasto = require("./sql/dbHandler.js");
const varasto = new Tietovarasto();

app.use(
    session({
        name: "session",
        secret: "secretKey",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    })
);

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {

    console.log(req)

    varasto
        .haeKaikki()
        .then((tulos) => {
            res.send(tulos);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    varasto
        .tarkistaKirjautuminen(username, password)
        .then((tulos) => {
            // console.log(tulos);
            res.send(tulos);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.post("/register", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    varasto
        .lisaaKayttaja(name, password)
        .then((tulos) => {
            // console.log(tulos);
            res.send(tulos);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

app.listen(port, host, () => {
    console.log(`Palvelin käynnistyi portissa ${port}`);
});
