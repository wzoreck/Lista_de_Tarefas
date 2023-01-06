import React, { Component } from "react";

//Form
import { FaPlus } from 'react-icons/fa'; // Instalado com $ npm i react-icons 

//Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

// Componentes com estado precisam ser uma classe, ao invés de usar o return diretamente utilizam o método render()

// Criada a classe Main que extende Component e está sendo exportada
export default class Main extends Component {
    state = { // Forma mais simples de se fazer, com Class fields
        novaTarefa: '', // Inicializando o estado
        tarefas: [
            'Fazer café',
            'Beber água',
            'Programar',
        ],
    };

    handleChange = (event) => { // Arrow function, usado pra resolver o problema do this
        this.setState({
            novaTarefa: event.target.value,
        });
    }

    render() {
        // Pegar o valor do estado
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form action="#" className="form">
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa}>
                            {tarefa}
                            <div>
                                <FaEdit className="edit" />
                                <FaWindowClose className="delete" />
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}