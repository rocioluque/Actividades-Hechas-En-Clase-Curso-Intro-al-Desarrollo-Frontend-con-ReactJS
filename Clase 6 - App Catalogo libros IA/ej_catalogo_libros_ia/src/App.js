import logo from './logo.svg';
import './App.css';
import ListaLibros from './components/ListaLibros';
import DetalleLibro from './components/DetalleLibro';
import FormularioCrearLibro from './components/FormularioCrearLibro';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';
import AcercaDe from './components/AcercaDe';
import Menu from './components/Menu';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { libros } from './data/libros';


function App() {
  return (
    //agregar el componente de lista de libros 
    <div>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<ListaLibros libros={libros}/>} />
          <Route path='/libros/:id' element={<DetalleLibro libros={libros}/>} />
          <Route path='libros/crear' element={<FormularioCrearLibro />} />
          <Route path='/acerca-de' element={<AcercaDe />} />
          <Route path='*' element={<PaginaNoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
