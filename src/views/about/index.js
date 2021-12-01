import React from "react";
import Button from "../../components/button";
import './style.css';

const About = () => (
    <div className="column">

        <div>
            <ul className="my-info">
                <li><strong>Nome: </strong>Daiane Marques</li>
            </ul>
            <ul>
                <li><strong>Nascimento: </strong>10/05/1992</li>
            </ul>
            <ul className="my-info2">
                <li><strong>Idade </strong>29 anos</li>
            </ul>
        </div>
        <div className="columns">
            <div className="column info">
                <div class="card-content">
                    <div class="media">

                        <div class="media-content">
                            <p class="title is-4">BCN Medical System</p>
                            <p class="subtitle is-6">Técnica em informática</p>
                        </div>
                    </div>

                    <div class="content">
                        Desenvolvo aplicativos Web para acesso à imagens e laudos por médicos e pacientes.
                        <br />
                        <br />
                        <time><em>Abril 2018 - Atual</em></time>
                    </div>
                </div>
            </div>
            <div className="column info">
                <div class="card-content">
                    <div class="media">

                        <div class="media-content">
                            <p class="title is-4">Manpower</p>
                            <p class="subtitle is-6">Auxiliar de Processamento de Dados</p>
                        </div>
                    </div>

                    <div class="content">
                        Digitação de dados.
                        <br />
                        <br />
                        <time><em>Setembro 2018 - Abril 2018</em></time>
                    </div>
                </div>
            </div>
        </div>
        <h6 className="title">Formação </h6>
        <div className="certificates">
            <h6 className="title is-4">EAD Laureate / FADERGS </h6>
            <p className="subtitle">Gestão de TI</p>
            <p className="subtitle is-6"><em>Aguardando Diploma</em></p>
        </div>
        <br/>
        <div className="certificates">
            <h6 className="title is-4">Escola e faculdade técnica QI </h6>
            <p className="subtitle">Técnico de informática</p>
            <p className="subtitle is-6"><em>2015</em></p>
        </div>
        <br/>
        <div className="certificates">
            <h6 className="title is-4">Escola NewPoint </h6>
            <p className="subtitle">Inglês</p>
            <br/>
        </div>
        <div className="certificates">
            <h6 className="title is-4">Microcamp </h6>
            <p className="subtitle">Profissional de WebDesign</p>
            <br/>
        </div>
        <h6 className="title">Cursos Online</h6>
        <div className="certificates">
            <h6 className="title is-4">Digital Innovation One</h6>
            <p className="subtitle">Projetos Ágeis com SCRUM</p>
            <p className="subtitle is-6"><em>Abril 2021</em></p>
            <br/>
            <p className="subtitle">Criação de Soluções Inovadoras</p>
            <p className="subtitle is-6"><em>Abril 2021</em></p>
            <br/>
            <p className="subtitle">Lógica Essencial</p>
            <p className="subtitle is-6"><em>Abril 2021</em></p>
            <br/>
            <p className="subtitle">Introdução ao React.js</p>
            <p className="subtitle is-6"><em>Novembro 2021</em></p>
        </div>


        <Button />
    </div>
)

export default About;