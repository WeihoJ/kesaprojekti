import React from "react";
import Kuva1 from "../assets/img/unsplash images/neonbrand-60krlMMeWxU-unsplash.jpg";
import Video from "../assets/video/background-video.mp4";
import "../App.css"
const BSInfo = () => {
    return (
        <div>
            {/* Video osuus */}
            <div class="video-background" style={{ marginBottom: -6 }}>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={Video} type="video/mp4"></source>
                </video>

                <div class="caption text-center">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <a class="btn btn-outline-light btn-lg" href="#course">Lue lisää</a>
                </div>
            </div>

            {/* Info osuus */}
            <div class="container-fluid info">
                {/* Meistä */}
                <div class="row">
                    <div class="col col1">
                        <h3 style={{ paddingTop: 10 }}>Meistä</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat esse neque incidunt vero quis ex eligendi laboriosam tempore! Fugit ducimus fuga hic ea corrupti nulla. Blanditiis accusantium impedit ad.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iusto nihil vel reiciendis quam doloremque. Neque, quibusdam. Maxime quas ad neque soluta nihil nam, ipsum placeat explicabo doloribus, accusamus voluptatibus!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure dicta dignissimos eos hic tempore aliquam, laboriosam, consectetur necessitatibus minima ducimus alias harum nisi eveniet illum ut distinctio deleniti impedit?</p>
                    </div>

                    <div class="col col2 kuva">
                        <img src={Kuva1} class="img-fluid rounded"></img>
                    </div>
                </div>

                {/* Historia */}
                <div class="row">
                    <div class="col col1 kuva">
                        <img src={Kuva1} class="img-fluid rounded"></img>
                    </div>

                    <div class="col col2">
                        <h3>Historia</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat esse neque incidunt vero quis ex eligendi laboriosam tempore! Fugit ducimus fuga hic ea corrupti nulla. Blanditiis accusantium impedit ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iusto nihil vel reiciendis quam doloremque. Neque, quibusdam. Maxime quas ad neque soluta nihil nam, ipsum placeat explicabo doloribus, accusamus voluptatibus!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure dicta dignissimos eos hic tempore aliquam, laboriosam, consectetur necessitatibus minima ducimus alias harum nisi eveniet illum ut distinctio deleniti impedit?</p>
                    </div>
                </div>
            </div>

            {/* Karuselli osuus */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                {/* Pisteet */}
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Karuselli tavarat */}
                <div class="carousel-inner">

                    {/* Tavara 1 */}
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col col4">
                                <img src={Kuva1} class="KKuva" alt="..."></img>
                            </div>
                            <div class="col col3">
                                <div class="colText">
                                    <h3>Referenssi 1</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit ad autem, asperiores cum sequi necessitatibus eveniet, excepturi quis exercitationem iure ducimus voluptatum iusto magni quam obcaecati suscipit perspiciatis alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae officia dolore aut, tempore natus maiores et tenetur iste! Odit dolorum cumque eveniet commodi veniam nemo dolor minus iure quam! Eveniet.</p>
                                    <br />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quaerat eveniet sunt voluptatem. Aperiam, inventore magni commodi vel ullam recusandae tempore. Ab voluptatibus a unde sapiente magnam saepe, incidunt distinctio?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tavara 2 */}
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col col4">
                                <img src={Kuva1} class="KKuva" alt="..."></img>
                            </div>
                            <div class="col col3">
                                <div class="colText">
                                    <h3>Referenssi 2</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit ad autem, asperiores cum sequi necessitatibus eveniet, excepturi quis exercitationem iure ducimus voluptatum iusto magni quam obcaecati suscipit perspiciatis alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae officia dolore aut, tempore natus maiores et tenetur iste! Odit dolorum cumque eveniet commodi veniam nemo dolor minus iure quam! Eveniet.</p>
                                    <br />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quaerat eveniet sunt voluptatem. Aperiam, inventore magni commodi vel ullam recusandae tempore. Ab voluptatibus a unde sapiente magnam saepe, incidunt distinctio?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tavara 3 */}
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col col4">
                                <img src={Kuva1} class="KKuva" alt="..."></img>
                            </div>
                            <div class="col col3">
                                <div class="colText">
                                    <h3>Referenssi 3</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit ad autem, asperiores cum sequi necessitatibus eveniet, excepturi quis exercitationem iure ducimus voluptatum iusto magni quam obcaecati suscipit perspiciatis alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae officia dolore aut, tempore natus maiores et tenetur iste! Odit dolorum cumque eveniet commodi veniam nemo dolor minus iure quam! Eveniet.</p>
                                    <br />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quaerat eveniet sunt voluptatem. Aperiam, inventore magni commodi vel ullam recusandae tempore. Ab voluptatibus a unde sapiente magnam saepe, incidunt distinctio?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nuoli edelliseen */}
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                {/* Nuoli seuraavaan */}
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Palvelut osuus */}
            <div class="container-fluid palvelut">
                {/* Otsikko */}
                <div class="text-center POtsikko">
                    <h1>Palvelut</h1>
                </div>

                <div class="row PRivi">

                    {/* Tavara 1 */}
                    <div class="col col5">
                        <h3>Palvelu 1</h3>
                        <p>
                            Nunc eget diam et eros iaculis
                            ornare. Nunc diam dui, venenatis eu
                            tellus et, fermentum dictum felis.
                            Sed semper lectus id facilisis
                            viverra. Phasellus sit amet magna id
                            lectus cursus vulputate. Quisque
                            augue leo, ornare eu mattis quis,
                            dignissim a erat.
                        </p>
                        <ul class="list">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Dolore reiciendis qui quasi sunt quo harum aperiam molestiae nobis in beatae vero similique earum, ab quisquam atque a ullam nam! Eos?
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Accusantium incidunt consequatur consequuntur maxime.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Blanditiis porro laudantium eligendi atque repellendus inventore soluta ipsam sequi eaque nisi perferendis.
                            </li>
                        </ul>
                    </div>

                    {/* Tavara 2 */}
                    <div class="col col5">
                        <h3>Palvelu 2</h3>
                        <p>
                            Nunc eget diam et eros iaculis
                            ornare. Nunc diam dui, venenatis eu
                            tellus et, fermentum dictum felis.
                            Sed semper lectus id facilisis
                            viverra.
                        </p>
                        <ul class="list">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Dolore reiciendis qui quasi sunt quo harum aperiam molestiae nobis in beatae vero similique earum, ab quisquam atque a ullam nam! Eos?
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Accusantium incidunt consequatur consequuntur maxime.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Blanditiis porro laudantium eligendi atque repellendus inventore soluta ipsam sequi eaque nisi perferendis.
                            </li>
                        </ul>
                    </div>

                    {/* Tavara 3 */}
                    <div class="col col5">
                        <h3>Palvelu 3</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur suscipit repudiandae perferendis mollitia! Reiciendis ex quae beatae iste quidem possimus deleniti eius pariatur repellat quo. Aliquid, labore. Ipsa, blanditiis dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <ul class="list">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Dolore reiciendis qui quasi sunt quo harum aperiam molestiae nobis in beatae vero similique earum, ab quisquam atque a ullam nam! Eos?
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Accusantium incidunt consequatur consequuntur maxime.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Blanditiis porro laudantium eligendi atque repellendus inventore soluta ipsam sequi eaque nisi perferendis.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Dolore reiciendis qui quasi sunt quo harum aperiam molestiae nobis in beatae vero similique earum, ab quisquam atque a ullam nam! Eos?
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Accusantium incidunt consequatur consequuntur maxime.
                            </li>
                        </ul>
                    </div>

                    {/* Tavara 4 */}
                    <div class="col col5">
                        <h3>Palvelu 4</h3>
                        <p>
                            Nunc eget diam et eros iaculis
                            ornare. Nunc diam dui, venenatis eu
                            tellus et, fermentum dictum felis.
                            Sed semper lectus id facilisis
                            viverra.

                            Phasellus sit amet magna id lectus
                            cursus vulputate. Quisque augue
                            leo, ornare eu mattis quis, dignissim
                            a erat. Orci varius natoque penatibus
                            et magnis dis parturient montes,
                            nascetur ridiculus mus.
                        </p>
                        <ul class="list">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Dolore reiciendis qui quasi sunt quo harum aperiam molestiae nobis in beatae vero similique earum, ab quisquam atque a ullam nam! Eos?
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Accusantium incidunt consequatur consequuntur maxime.
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                Blanditiis porro laudantium eligendi atque repellendus inventore soluta ipsam sequi eaque nisi perferendis.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BSInfo;
