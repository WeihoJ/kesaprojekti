import React from "react";

const Sisaltosivut = (sivut) => {

const testisivut=[
    {
        sivun_nimi:"testinimi",
        sivun_url:"http://localhost:3000/blog"

    }
]
return (
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Sivun otsikko</th>
                    <th scope="col">URL</th>
                </tr>
            </thead>
            <tbody>
                {testisivut.map((sivu) => {
                    return (
                        <tr key={sivu.sivun_nimi}>
                            <th scope="row">{sivu.sivun_nimi}</th>
                            <th><a href={sivu.sivun_url}>{sivu.sivun_url}</a></th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
                <button href="/uusiSivu">Tee uusi sivu (ei toimi)</button>
    </div>
)
};

export default Sisaltosivut;
