import React from "react";
import { Link } from 'react-router-dom';

const Button = () => (
    <button className="button is-success"><Link to={`/`}>Voltar</Link></button>
);

export default Button;