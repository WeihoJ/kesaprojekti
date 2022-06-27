import React from "react";

const SisaltosivuPohja = (props) => {
    const sivu = props.sivu;
    console.log(sivu);
    return (
        <div className="p-top-76">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Käyttäjäid</th>
                        <th scope="col">Käyttäjänimi</th>
                        <th scope="col">Salasana</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={sivu.sivun_nimi}>
                        <th scope="row">{sivu.sivun_nimi}</th>
                        <td>{sivu.sivun_otsikko}</td>
                        <td>{sivu.sivun_url}</td>
                    </tr>
                </tbody>
            </table>
            <h1>JOKAISELLA SIVULLA ON OMA TÄLLÄNE PAIKKA JOSSA NÄKYY TOISTASEKSI VAAN TÄLLÄSTÄ TIETOA...</h1>
        </div>
    );
};

export default SisaltosivuPohja;
