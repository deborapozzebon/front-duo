import './App.css';
import Carousel from './carousel/carousel';
import Accordion from './accordion/accordion';
import Navbar from './navbar/navbar';
import data from './assets/duvidas.json';

function App() {
  return (
    <div className="App">
      <Carousel />
      <Navbar />
      <body className="app-body">
        {
          data.lista_tarefas.map((item) => {
             return <Accordion
              title={item.titulo}
              content={item.descricao}
            />
          })
        }
      </body>
      <footer className="app-footer fixed-bottom" />
    </div>
  );
}

export default App;
