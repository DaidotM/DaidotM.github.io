import React from "react";
import { Component } from "react";
import './style.css';

import portal1 from '../../images/portal1.jpg';
import portal2 from '../../images/portal2.jpg';
import portal3 from '../../images/portal3.jpg';
import Button from '../../components/button';
import viewer from '../../images/viewer.jpg';

export default class MyWorks extends Component {
    render() {
        return (
            <div className="column" id="my-works">
                <h6 className="title">Meus trabalhos profissionais </h6>

                <div className="first box columns">
                    <img src={portal1} className="images" alt="Portal com Login." />
                    <img src={portal2} id="list-patient" alt="Lista de exames." />
                    <div className="column description">
                        <p>Portal de visualização de laudos e exames para pacientes.</p>
                        <p><em>BCN Medical Systems</em></p>
                    </div>
                </div>
                <div className="second box columns">
                    <img src={portal1} className="images" alt="Portal com Login." />
                    <img src={portal3} className="images" alt="Lista de pacientes." />
                    <div className="column description">
                        <p>Portal de visualização de laudos e exames para médicos e trabalhadores das clínicas/hospitais.</p>
                        <p><em>Aplicativo web em sincronia com o pacs desktop. </em></p>
                        <p><em>BCN Medical Systems</em></p>
                    </div>
                </div>
                <div className="third box columns">
                    <img src={viewer} className="images" alt="Exame." />
                    <div className="column description">
                        <p>Estilização e atualização de visualizador de imagens médicas.</p>
                        <p><em>BCN Medical Systems</em></p>
                    </div>
                </div>

                <div>
                    <Button />
                </div>
            </div>
        )
    }
}