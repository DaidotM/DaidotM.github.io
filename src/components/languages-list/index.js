import React from "react";
import { Component } from "react";
import './style.css';
import 'bulma/css/bulma.min.css';

export default class LanguagesList extends Component {
    render() {
        return (
            <div id="languageslist">
                <ul className="list">
                    <h4 className="title">Inglês</h4>
                    <ul>
                        <li> <progress className="progress is-success is-small bar" value="70" max="100"></progress></li>
                        <li>Meu inglês é intermediário. Não tive muitas experiências de conversasão.</li>
                    </ul>
                </ul>
                <ul className="list">
                    <h4 className="title">Linguagens</h4>
                    <li>
                        HTML5
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="90" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        CSS3
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="90" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        JavaScript
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="100" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        PHP
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="90" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        SQL
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="80" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        MySQL
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="60" max="100"></progress></li>
                        </ul>
                    </li>
                </ul>
                <ul className="list">
                    <h4 className="title">Bibliotecas / Frameworks</h4>
                    <li>
                        Bootstrap
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="90" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        JQuery
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="100" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        React.js
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="20" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        Vue.js
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="0" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        Bulma
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="20" max="100"></progress></li>
                        </ul>
                    </li>
                </ul>
                <ul className="list">
                    <h4 className="title">Outros</h4>
                    <li>
                        AWS
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="70" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        Photoshop
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="80" max="100"></progress></li>
                        </ul>
                    </li>
                    <li>
                        CorelDraw
                        <ul>
                            <li> <progress className="progress is-success is-small bar" value="85" max="100"></progress></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}