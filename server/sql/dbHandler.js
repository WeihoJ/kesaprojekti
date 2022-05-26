"use strict";

const Tietokanta = require("./database.js");

const optiot = require("./connectionConfig.json");

const argon2 = require("argon2");

module.exports = class Tietovarasto {
    constructor() {
        this.db = new Tietokanta(optiot);
    }

    haeKaikki() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos1 = await this.db.runQuery(
                    "SELECT * FROM kayttajat",
                    []
                );
                if (tulos1) {
                    resolve(tulos1);
                } else {
                    reject("Ei löytyny");
                }
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }

    tarkistaKirjautuminen(username, password) {
        return new Promise(async (resolve, reject) => {
            try {
                // Luo argon2 salauksella suojatun salasanan
                const securePassword = await argon2.hash(password);

                if (typeof username === "undefined" || username === "") {
                    // Ei pitäisi ikinä joutua tänne koska frontista ei lähde pyyntö jos tyhjä
                    reject({
                        signedIn: false,
                        message: "Käyttäjänimi puuttuu",
                    });
                } else if (typeof password === "undefined" || password === "") {
                    // Ei pitäisi ikinä joutua tänne koska frontista ei lähde pyyntö jos tyhjä
                    reject({ signedIn: false, message: "Salasana puuttuu" });
                } else {
                    const tulosJoukko = await this.db.runQuery(
                        "SELECT * FROM kayttajat",
                        []
                    );

                    for (const tulos of tulosJoukko) {
                        if (tulos.kayttajanimi == username) {
                            if (await argon2.verify(tulos.salasana, password)) {
                                resolve({
                                    signedIn: true,
                                    message: "Kirjautuminen onnistui",
                                });
                            } else {
                                reject({
                                    signedIn: false,
                                    message: "Väärä salasana",
                                });
                            }
                            reject({
                                signedIn: false,
                                message: "Käyttäjänimeä ei ole olemassa",
                            });
                        }
                    }

                    reject({
                        signedIn: false,
                        message: "Kirjautuminen epäonnistui",
                    });
                }
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }

    lisaaKayttaja(kayttajanimi, salasana) {
        return new Promise(async (resolve, reject) => {
            try {
                // Luo argon2 salauksella suojatun salasanan
                const securePassword = await argon2.hash(salasana);

                if (
                    typeof kayttajanimi === "undefined" ||
                    kayttajanimi === ""
                ) {
                    // Ei pitäisi ikinä joutua tänne koska frontista ei lähde pyyntö jos tyhjä
                    reject({ message: "Käyttäjänimi puuttuu" });
                } else if (typeof salasana === "undefined" || salasana === "") {
                    // Ei pitäisi ikinä joutua tänne koska frontista ei lähde pyyntö jos tyhjä
                    reject({ message: "Salasana puuttuu" });
                } else {
                    // Hakee tietokannasta käyttjiä annetulla nimellä
                    let onkoJo = await this.db.runQuery(
                        "SELECT * FROM kayttajat WHERE kayttajanimi=?",
                        [kayttajanimi]
                    );
                    // tarkistaa onko käyttäjä jo olemassa
                    if (onkoJo.length !== 0) {
                        // Jos käyttäjä on olemassa palauttaa virheviestin
                        reject({ message: "Käyttäjänimi on jo käytössä" });
                    } else {
                        await this.db.runQuery(
                            "INSERT INTO kayttajat (kayttajanimi, salasana) VALUES (?, ?)",
                            [kayttajanimi, securePassword]
                        );
                        resolve({ message: "Käyttäjä lisätty" });
                    }
                }
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }
};
