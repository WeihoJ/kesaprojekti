import React from "react";

const Sisaltosivut = (props) => {

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
                {props.sivut.map((sivu) => {
                    return (
                        <tr key={sivu.sivun_nimi}>
                            <th scope="row">{sivu.sivun_nimi}</th>
                            <th><a href={"sisalto/"+sivu.sivun_url}>{sivu.sivun_url}</a></th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
                <a href="/uusiSivu"><button>Tee uusi sivu</button></a>
    </div>
)
};

export default Sisaltosivut;
