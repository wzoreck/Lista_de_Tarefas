import React, { Component } from "react";

// Componentes com estado precisam ser uma classe, ao invés de usar o return diretamente utilizam o método render()

// Criada a classe Main que extende Component e está sendo exportada
export default class Main extends Component {
    state = { // Forma mais simples de se fazer, com Class fields
        novaTarefa: '', // Inicializando o estado
    };

    novoInput = (event) => { // Arrow function, usado pra resolver o problema do this
        this.setState({
            novaTarefa: event.target.value,
        });
    }

    render() {
        // Pegar o valor do estado
        const { novaTarefa } = this.state;

        return (
            <div className="main">
                <h1>{novaTarefa}</h1>

                <form action="#">
                    <input onChange={this.novoInput} type="text" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}