import React, { Component } from "react";

//Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import Form from './Form'; // ao importar a pasta form o arquivo index.js é automaticamente importado

import './Main.css';

// Componentes com estado precisam ser uma classe, ao invés de usar o return diretamente utilizam o método render()

// Criada a classe Main que extende Component e está sendo exportada
export default class Main extends Component {
    state = { // Forma mais simples de se fazer, com Class fields
        novaTarefa: '', // Inicializando o estado
        tarefas: [],
        index: -1, // igual a -1 - criando tarefas, diferente de -1 - editando uma tarefa
    };

    // Função do React que é executada sempre que o componente é montado na tela
    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if(!tarefas) return;

        this.setState({ tarefas: tarefas }); // Passando para o componente as tarefas que foram salvas, assim sempre que atualizar a página as tarefas continuarão a aparecer
    }

    // Função que é executada pelo React quando um componente é atualizado, prevProps e prevState trazem as propriedades e estados anteriores do componente
    componentDidUpdate(prevProps, prevState) {
        //console.log(prevState.novaTarefa);
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        //  Se a lista de tarefas mudar, salva no local storage
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); // Inspect -> Application -> Local Storage para ver os dados armazenados
        
    }

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

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

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