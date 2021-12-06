import React from "react";

import './style.css';

const Studies = () => (
    <div className="column">

        <div className="project">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by4">
                        <img src="https://raw.githubusercontent.com/DaidotM/react-first-project/master/src/images/printHome.png" alt="" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        React.js, PHP e MySQL.
                        <br />
                        Desenvolvi um CRUD simples que visualiza, cadastra e deleta produtos.
                        <br />
                        <a href="https://github.com/DaidotM/react-first-project">Primeiro Projeto React.js</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Studies;