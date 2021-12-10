import React from "react";
import { Component } from "react";
import './style.css';
import 'bulma/css/bulma.min.css';

export default class LanguagesList extends Component {
    render() {
        return (
            <div id="languageslist">
                <div className="block">
                    <h4 className="title title-lang">Inglês</h4>
                    <progress className="progress is-success is-small bar" value="70" max="100"></progress>
                    <p><em>Meu inglês é intermediário. Não tive muitas experiências de conversasão.</em></p>

                    <h4 className="title title-lang">Linguagens</h4>

                    <p>HTML5</p><progress className="progress is-success is-small bar" value="90" max="100"></progress>

                    <p>CSS3</p><progress className="progress is-success is-small bar" value="90" max="100"></progress>

                    <p>JavaScript</p><progress className="progress is-success is-small bar" value="90" max="100"></progress>

                    <p>PHP</p><progress className="progress is-success is-small bar" value="90" max="100"></progress>

                    <p>SQL</p><progress className="progress is-success is-small bar" value="80" max="100"></progress>

                    <p>MySQL</p><progress className="progress is-success is-small bar" value="60" max="100"></progress>
                </div>
                <div className="block">
                    <h4 className="title title-lang">Bibliotecas / Frameworks</h4>
                    <p>Bootstrap</p><progress className="progress is-success is-small bar" value="80" max="100"></progress>

                    <p>JQuery</p><progress className="progress is-success is-small bar" value="90" max="100"></progress>

                    <p>React.js</p><progress className="progress is-success is-small bar" value="30" max="100"></progress>

                    <p>Vue.js</p><progress className="progress is-success is-small bar" value="10" max="100"></progress>

                    <p>Bulma</p><progress className="progress is-success is-small bar" value="20" max="100"></progress>

                    <p>Hammer.js</p><progress className="progress is-success is-small bar" value="50" max="100"></progress>

                    <h4 className="title title-lang">Outros</h4>

                    <p>GIT</p><progress className="progress is-success is-small bar" value="50" max="100"></progress>

                    <p>AWS</p><progress className="progress is-success is-small bar" value="50" max="100"></progress>

                    <p>Linux</p><progress className="progress is-success is-small bar" value="20" max="100"></progress>

                    <p>Photoshop</p><progress className="progress is-success is-small bar" value="80" max="100"></progress>

                    <p>CorelDraw</p><progress className="progress is-success is-small bar" value="85" max="100"></progress>
                </div>
            </div>
        )
    }
}