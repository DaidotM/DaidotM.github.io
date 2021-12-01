import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCodeBranch, faAddressCard } from '@fortawesome/free-solid-svg-icons';

// import  Router  from "../../routes";
import { Link } from "react-router-dom";

const SideLeft = () => (
    <aside className="column is-2" id="side">
        
            <a className="links" href="https://www.linkedin.com/in/daiane-marques-ba64b3b5/">
                <div className="content-side">
                    <p>
                        <FontAwesomeIcon icon={faLinkedin} />
                        &nbsp;
                        Meu Linkedin
                    </p>
                </div>
            </a>
            <a className="links" href="https://github.com/DaidotM">
                <div className="content-side">
                    <p>
                        <FontAwesomeIcon icon={faGithubSquare} />
                        &nbsp;
                        Meu GitHub
                    </p>
                </div>
            </a>
            <Link className="links" to={`/my-works`} >
                <div className="content-side">
                    <p>
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp;
                        Meus Trabalhos
                    </p>
                </div>
            </Link>
            <Link className="links" to={`/my-studies`} >
                <div className="content-side">
                    <p>
                        <FontAwesomeIcon icon={faCodeBranch} />
                        &nbsp;
                        Meus Projetos
                    </p>
                </div>
            </Link>
            <Link className="links" to={`/about`} >
                <div className="content-side">
                    <p>
                        <FontAwesomeIcon icon={faAddressCard} />
                        &nbsp;
                        Mais sobre mim
                    </p>
                </div>
            </Link>
            
        
    </aside>
);

export default SideLeft;