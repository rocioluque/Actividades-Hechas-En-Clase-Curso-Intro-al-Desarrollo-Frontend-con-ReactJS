import logo from './logo.svg';
import './App.css';
import {libros} from './data/libros';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import ListaLibros from './components/ListaLibros';
import AcercaDe from './components/AcercaDe';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';
import Menu from "./components/Menu";
import DetalleLibro from './components/DetalleLibro';

function App() {
  return (
    <>
    <div className="container">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<ListaLibros libros={libros}/>}> </Route>
          <Route path='/libro/:id' element={<DetalleLibro libros={libros}/>}></Route>
          <Route path='/acerca-de' element={<AcercaDe/>}></Route>
          <Route path='*' element={<PaginaNoEncontrada/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
