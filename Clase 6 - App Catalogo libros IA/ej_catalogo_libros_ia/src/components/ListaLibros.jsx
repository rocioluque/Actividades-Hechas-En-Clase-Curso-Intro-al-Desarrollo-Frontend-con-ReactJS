//dicho componente debe mostrar el listado de libros que se encuentra en el archivo ./data/libros.js
import { Link } from 'react-router-dom';

const ListaLibros = ({ libros }) => {

  return (
    <div >
      <header>
        <h2>Lista de Libros</h2>
      </header>
      <div className='container'>
        <div className='element-list'>
          <Link to="/libros/crear">Crear Libro</Link>
          <ul >
            {libros.map((libro) => (
              <li key={libro.id}>
                {libro.titulo}
                <Link to={`/libros/${libro.id}`}>    Ver más</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListaLibros;