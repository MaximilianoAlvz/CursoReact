import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/navBar';
import ItemListContainer from './Componentes/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a RYMA COMPUTACION"/>
    </div>
  );
}

export default App;
