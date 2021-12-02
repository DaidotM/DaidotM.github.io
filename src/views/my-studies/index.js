import React from "react";

import './style.css';

const Studies = () => (
    <div className="column">

        <div className="project">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        React.js, PHP e MySQL.
                        <br />
                        Desenvolvi um CRUD simples que visualiza, cadastra e deleta produtos.
                        <br />
                        {/* Link apenas para não acusar warning */}
                        <a href="https://github.com/">Link em breve...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Studies;