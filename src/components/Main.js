import React, { Component } from "react";

// Componentes com estado precisam ser uma classe, ao invés de usar o return diretamente utilizam o método render()

// Criada a classe Main que extende Component e está sendo exportada
export default class Main extends Component {
    constructor(props) { // Construtor da classe/componente
        super(props); // Passando as propriedades do componente para a generealização Component

        // Esse é o estado do componente, sempre que ele for alterado irá refletir no JSX do render()
        this.state = {
            novaTarefa: 'teste', // Inicializando o estado
        };

        this.novoInput = this.novoInput.bind(this); // Passando o this para o método ter acesso
    }

    novoInput(event) {
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