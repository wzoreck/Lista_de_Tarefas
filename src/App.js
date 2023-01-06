import React from 'react'; // Sempre que for criar um componente precisa importar
import Main from './components/Main';

import './App.css'; // Importado o arquivos CSS para estilização do componente

// O componente App está sendo exportado, pois é importado em index.js
export default function App() {
  /* Com JSX somente é possível retornar elementos aninhados, ou seja não é possível retornar mais que um elemento "raiz" do componente, para encapsular pode-se usar uma <div></div> ou um fragmento <></> ex:
  
  return (
    <>
      <h1>Olá Mundo</h1>
      <p>Teste</p>
    </>
  );*/

  // Retornando o primeiro componente com estado que foi criado
  return <Main />;
}
