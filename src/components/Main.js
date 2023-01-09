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
        tarefas: [],
        index: -1, // igual a -1 - criando tarefas, diferente de -1 - editando uma tarefa
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); // Remove espaços em branco desnecessários

        if(tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas]; // Nào se pode mexer no estado diretamente, é necessário copiar ele

        if (index === -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: '',
            })
        } else {
            novasTarefas[index] = novaTarefa;
            
            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
                novaTarefa: '',
            });
        }
    }

    handleChange = (event) => { // Arrow function, usado pra resolver o problema do this
        this.setState({
            novaTarefa: event.target.value,
        });
    }

    handleEdit = (event, index) => {
        console.log('Edit', index);

        const { tarefas } = this.state;

        this.setState({
            index: index,
            novaTarefa: tarefas[index],
        });
    }

    handleDelete = (event, index) => {
        console.log('Delete', index);
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1); // Remover um elemento do indice dois

        this.setState({
            tarefas: [...novasTarefas],
        });
    }

    render() {
        // Pegar o valor do estado
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
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
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit
                                    onClick={
                                        /* Função que recebe o evento e retorna o handleEdit com o evento e o indice  */
                                        (e) => this.handleEdit(e, index)
                                    }
                                    className="edit"
                                />
                                <FaWindowClose
                                    onClick={(e) => this.handleDelete(e, index)}
                                    className="delete"
                                />
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}