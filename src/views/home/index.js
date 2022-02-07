import React from "react";
import './style.css';
import LanguagesList from "../../components/languages-list";

const Home = () => (
    <div className="column content">
        <h2 className="title" id="welcome">Seja Bem Vindo (a)!</h2>
        <br/>
        <p className="presentation">
            Me chamo <strong>Daiane</strong> e este é o meu portfólio. Construí este site em <strong>React.js</strong> e com a biblioteca <strong>Bulma</strong> para colocar meus trabalhos profissionais
            e estudos. Tenho mais de três anos de experiência com front-end e tive algumas atividades com back-end também.
            <br />
            Atualmente estou trabalhando na <span className="adpname"><b>ADP Labs</b></span> e muito empolgada!
            <br />Amo tecnologia e sou curiosa, sempre em busca de novos conhecimentos. 
        </p>
        <LanguagesList />
    </div>
);

export default Home;