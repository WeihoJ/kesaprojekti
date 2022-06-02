import React from "react";
import Kuva1 from "../assets/img/unsplash images/neonbrand-60krlMMeWxU-unsplash.jpg";

const BSInfo = () => {
    return (
        <div>
            {/* Meistä */}
            <div class="row rivi">
                <div class="col col1">
                    <h3>Meistä</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat esse neque incidunt vero quis ex eligendi laboriosam tempore! Fugit ducimus fuga hic ea corrupti nulla. Blanditiis accusantium impedit ad.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iusto nihil vel reiciendis quam doloremque. Neque, quibusdam. Maxime quas ad neque soluta nihil nam, ipsum placeat explicabo doloribus, accusamus voluptatibus!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure dicta dignissimos eos hic tempore aliquam, laboriosam, consectetur necessitatibus minima ducimus alias harum nisi eveniet illum ut distinctio deleniti impedit?</p>
                </div>

                <div class="col col2">
                    <img src={Kuva1} class="img-fluid rounded"></img>
                </div>
            </div>

            {/* Historia */}
            <div class="row rivi">
                <div class="col col1">
                    <img src={Kuva1} class="img-fluid rounded"></img>
                </div>

                <div class="col col2">
                    <h3>Historia</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat esse neque incidunt vero quis ex eligendi laboriosam tempore! Fugit ducimus fuga hic ea corrupti nulla. Blanditiis accusantium impedit ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iusto nihil vel reiciendis quam doloremque. Neque, quibusdam. Maxime quas ad neque soluta nihil nam, ipsum placeat explicabo doloribus, accusamus voluptatibus!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure dicta dignissimos eos hic tempore aliquam, laboriosam, consectetur necessitatibus minima ducimus alias harum nisi eveniet illum ut distinctio deleniti impedit?</p>
                </div>
            </div>

            {/* Karuselli */}
        </div>

    );
};

export default BSInfo;
