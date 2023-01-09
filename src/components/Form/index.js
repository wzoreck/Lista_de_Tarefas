import React from "react";
import PropTypes from 'prop-types'; // npm i prop-types
import { FaPlus } from 'react-icons/fa'; // Instalado com $ npm i react-icons

import './Form.css';

export default function Form({handleSubmit, handleChange, novaTarefa}) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
            <input
                onChange={handleChange}
                type="text"
                value={novaTarefa}
            />
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    );
}

// Fazendo a validação das propriedades com o prop-types
Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}