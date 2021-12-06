import React from "react";
import './style.css';

const About = () => (
    <div className="column aboutme">
        <div className="my-info">
            <div className="block">
                <p><strong>Nascimento </strong>10/05/1992</p>
                <p><strong>Idade </strong>29 anos</p>
            </div>
        </div>
        <div className="columns">
            <div className="column info">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">BCN Medical System</p>
                            <p className="subtitle is-6">Técnica em informática</p>
                        </div>
                    </div>

                    <div className="content">
                        Desenvolvo aplicativos Web para acesso à imagens e laudos por médicos e pacientes.
                        <br />
                        <br />
                        <time><em>Abril 2018 - Atual</em></time>
                    </div>
                </div>
            </div>
            <div className="column info">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">Manpower</p>
                            <p className="subtitle is-6">Auxiliar de Processamento de Dados</p>
                        </div>
                    </div>

                    <div className="content">
                        Digitação de dados.
                        <br />
                        <br />
                        <time><em>Setembro 2018 - Abril 2018</em></time>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="columns">
            <div className="column info">
                <h6 className="title">Formação </h6>
                <div className="certificates">
                    <h6 className="title is-4">EAD Laureate / FADERGS </h6>
                    <p className="subtitle">Gestão de TI</p>
                    <p className="subtitle is-6"><em>Aguardando Diploma</em></p>
                </div>
                <br />
                <div className="certificates">
                    <h6 className="title is-4">Escola e faculdade técnica QI </h6>
                    <p className="subtitle">Técnico de informática</p>
                    <p className="subtitle is-6"><em>2015</em></p>
                </div>
                <br />
                <div className="certificates">
                    <h6 className="title is-4">Escola NewPoint </h6>
                    <p className="subtitle">Inglês</p>
                    <br />
                </div>
                <div className="certificates">
                    <h6 className="title is-4">Microcamp </h6>
                    <p className="subtitle">Profissional de WebDesign</p>
                    <br />
                </div>
            </div>
            <div className="column info">
                <h6 className="title">Cursos Online</h6>
                <div className="certificates">
                    <h6 className="title is-4">Digital Innovation One</h6>
                    <p className="subtitle">Projetos Ágeis com SCRUM</p>
                    <p className="subtitle is-6"><em>Abril 2021</em></p>
                    <br />
                    <p className="subtitle">Criação de Soluções Inovadoras</p>
                    <p className="subtitle is-6"><em>Abril 2021</em></p>
                    <br />
                    <p className="subtitle">Lógica Essencial</p>
                    <p className="subtitle is-6"><em>Abril 2021</em></p>
                    <br />
                    <p className="subtitle">Introdução ao React.js</p>
                    <p className="subtitle is-6"><em>Novembro 2021</em></p>
                </div>
            </div>
        </div>
    </div >
)

export default About;