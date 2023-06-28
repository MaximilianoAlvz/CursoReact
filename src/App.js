import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/navBar';
import ItemListContainer from './Componentes/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a RYMA COMPUTACION"/>
    </div>
  );
}

export default App;
