"use strict";

const Tietokanta = require("./database.js");

const optiot = require("./connectionConfig.json");

const argon2 = require("argon2");

const sql = require("./sqlQuerys.json");

module.exports = class Tietovarasto {
    constructor() {
        this.db = new Tietokanta(optiot);
    }

    haeKaikki() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos1 = await this.db.runQuery(sql.haeKaikki, []);
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
    haePyynnot() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.runQuery(sql.haeKaikkiPyynnot, []);
                if (tulos) {
                    resolve(tulos);
                } else {
                    reject("Ei löytyny");
                }
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }
    
    haeTervetulo() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.runQuery(sql.haeTervetulo, []);
                
                if (tulos.length == 0) {
                    reject({
                        status: "virheellinen",
                        virhe: "Tervetuloviestiä ei ole olemassa",
                    });
                } else {
                    resolve({ status: "oikein", tervetuloviesti: tulos[0].teksti });
                }
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }
    vaihdaTervetulo(uusi){
        return new Promise(async(resolve,reject)=>{
            try{
                const tulos=await this.db.runQuery(sql.vaihdaTervetulo,[uusi]);
                if (tulos.length == 0) {
                    reject("Tervetulotekstiä ei muutettu");
                } else {
                    resolve("Tervetuloteksti muutettiin");
                }
            }
            catch(err){
                console.log(err);
            }
        })
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
                        sql.haeKaikki,
                        []
                    );

                    for (const tulos of tulosJoukko) {
                        if (tulos.kayttajanimi == username) {
                            if (await argon2.verify(tulos.salasana, password)) {
                                resolve({
                                    signedIn: true,
                                    message: "Kirjautuminen onnistui",
                                    user: tulos,
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

    lisaaKayttaja(kayttajanimi, salasana, role) {
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
                    let onkoJo = await this.db.runQuery(sql.haeKayttaja, [
                        kayttajanimi,
                    ]);
                    // tarkistaa onko käyttäjä jo olemassa
                    if (onkoJo.length !== 0) {
                        // Jos käyttäjä on olemassa palauttaa virheviestin
                        reject({ message: "Käyttäjänimi on jo käytössä" });
                    } else {
                        await this.db.runQuery(sql.lisaaKayttaja, [
                            kayttajanimi,
                            securePassword,
                            role,
                        ]);
                        resolve({ message: "Käyttäjä lisätty" });
                    }
                }
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }

    lisaaYhteydenottopyynto(nimi, puhnro, sposti, viesti) {
        return new Promise(async (resolve, reject) => {
            try {
                if (typeof sposti === "undefined" || sposti === "") {
                    reject({ message: "Sähköposti puuttuu" });
                } else if (typeof viesti === "undefined" || viesti === "") {
                    reject({ message: "Viesti puuttuu" });
                } else {
                    await this.db.runQuery(sql.lisaaYhteydenottopyynto, [
                        nimi,
                        puhnro,
                        sposti,
                        viesti,
                    ]);
                    resolve({
                        message: "Yhteydenottopyyntö jätetty onnistuneesti",
                    });
                }
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }
    kuvaaTaulukot() {
        return new Promise(async (resolve, reject) => {
            try {
                let b = [];
                b.push(
                    await this.db.runQuery("describe yhteydenottopyynnot", [])
                );
                b.push(await this.db.runQuery("describe kayttajat", []));
                // b.push(await this.db.runQuery("SELECT * FROM information_schema.columns WHERE table_schema = 's2000966_3';", []));

                resolve(b);
            } catch (virhe) {
                console.log(virhe);
                reject(virhe);
            }
        });
    }
};
