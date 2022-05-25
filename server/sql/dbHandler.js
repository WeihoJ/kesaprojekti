// const { runQuery } = require("./database.js");

// async function getAllUsers() {
//     try {
//         return await runQuery("SELECT * FROM users", []);
//     } catch (err) {
//         console.log(err);
//         return null;
//     }
// }

'use strict';

const Tietokanta = require('./database.js');

const optiot = require('./connectionConfig.json');

module.exports = class Tietovarasto {
    constructor() {
        this.db = new Tietokanta(optiot);
    }

    haeKaikki() {
        return new Promise(async (resolve, reject) => {
            try {
                const tulos = await this.db.runQuery("SELECT * FROM kayttajat", []);
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
};
