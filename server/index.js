const express = require("express");
const app = express();
const cors = require("cors");
app.use (cors({
    origin: "*"
}));


const { port, host } = require("./config.json");

const mysql = require("mysql");

const Tietovarasto = require("./sql/dbHandler.js");
const varasto = new Tietovarasto();

app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
    varasto
        .haeKaikki()
        .then((tulos) => {
            res.json(tulos);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

app.listen(port, host, () => {
    console.log(`Palvelin käynnistyi portissa ${port}`);
});
