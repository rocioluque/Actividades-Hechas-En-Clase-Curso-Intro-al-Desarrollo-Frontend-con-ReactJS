import { useState } from "react";
import { Link } from "react-router-dom";
import FormularioAgregarLibro from "./FormularioAgregarLibro";

const ListaLibros = ({libros}) => {
    const [categoria, setCategoria] = useState("");
    
    const [ListaLibros, setListaLibros] = useState(libros);

    const agregarLibro = (nuevoLibro) => {
        setListaLibros([...ListaLibros, nuevoLibro]);
    };
  
    const librosFiltrados = ListaLibros.filter(
        (libro) => libro.categoria === categoria || !categoria
    );

    return (
        <div className="catalogo-container">
            <h1>Formulario Nuevo Libro</h1>
            <div className="formulario-container">
                <FormularioAgregarLibro agregarLibro={agregarLibro} />
            </div>
            <h1>Mini Catalogo de Libros</h1>
            <label>Categoría: </label>
            <select onChange={(e) => setCategoria(e.target.value)} className="custom-select">
                <option key="0" value="">Todos</option>
                <option key="1" value="Clásico">Clásico</option>
                <option key="2" value="Distopía">Distopía</option>
                <option key="3" value="Fantasía">Fantasía</option>
                <option key="4" value="Ciencia Ficción">Ciencia Ficción</option>
                <option key="5" value="Realismo Mágico">Realismo Mágico</option>
                <option key="6" value="Thriller">Thriller</option>
                <option key="7" value="Historia">Historia</option>
            </select>

            <div className="book-gird">
                {librosFiltrados.map((libro) =>(
                 <div key = {libro.id} className="book-card">
                    <div className="book-title">{libro.título}</div>
                    <div className="book-descripcion">{libro.descripcion}</div>
                    <div className="book-autor">{libro.autor}</div>
                    <div className="book-categoria">{libro.categoria}</div>
                    <Link to={`/libro/${libro.id}`}>Ver más</Link>

                 </div>
                ))
            } 
            </div>
        </div>
    )
}

export default ListaLibros;

