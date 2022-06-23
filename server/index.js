const cors = require("cors");
const mysql = require("mysql");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const { port, host } = require("./config.json");

const Tietovarasto = require("./sql/dbHandler.js");
const varasto = new Tietovarasto();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "user_id",
        secret: "superSecretKeyDontShowToAnyone",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 15 * 60 * 1000,
        }, // 15 minuuttia
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
    // console.log(req)

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
app.get("/pyynnot", (req, res) => {
    varasto
        .haePyynnot()
        .then((tulos) => {
            res.send(tulos);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

app.get("/api/checklogin", (req, res) => {
    if (req.session.user) {
        // console.log(req.session)
        res.send({
            loggedIn: true,
            user: req.session.user,
            userRole: req.session.userRole,
        });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.send({ loggedIn: false });
});

app.get("/api/tervetuloa", (req, res) => {
    varasto
        .haeTervetulo()
        .then((tulos) => {
            res.send(tulos);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.post("/tervetuloa", (req, res) => {
    const uusiTeksti=req.body.tervetuloteksti;
    varasto.vaihdaTervetulo(uusiTeksti)
    .then((tulos)=>{res.send(tulos)})
    .catch((err)=>{res.send(err)});
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    varasto
        .tarkistaKirjautuminen(username, password)
        .then((tulos) => {
            // console.log(tulos);
            if (tulos.signedIn) {
                req.session.user = tulos.user.kayttajanimi;
                req.session.userRole = tulos.user.rooli;
                res.send(tulos);
            } else {
                res.send(tulos);
            }
        })
        .catch((err) => {
            res.send(err);
        });
});

app.post("/register", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    let role = req.body.role;
    if (role == "" || role == null || role == " ") {
        role = "user";
    }

    varasto
        .lisaaKayttaja(name, password, role)
        .then((tulos) => {
            // console.log(tulos);
            res.send(tulos);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

app.post("/yhteydenotto", (req, res) => {
    const nimi = req.body.nimi;
    const puhnro = req.body.puhnro;
    const sposti = req.body.sposti;
    const viesti = req.body.viesti;

    varasto
        .lisaaYhteydenottopyynto(nimi, puhnro, sposti, viesti)
        .then((tulos) => {
            res.send(tulos);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

app.get("/kuvaa", (req, res) => {
    varasto
        .kuvaaTaulukot()
        .then((tulos) => {
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
// const a = new Tietovarasto();
// a.haePyynnot();
