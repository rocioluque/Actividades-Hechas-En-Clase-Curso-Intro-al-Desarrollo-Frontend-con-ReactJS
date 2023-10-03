import { useParams} from "react-router-dom";

const DetalleLibro = ({libros}) => {
    const {id} = useParams();
    const libro = libros.find((libro) => libro.id === parseInt(id));
    
    return (
        <div className='container'>
            <h2>{libro.titulo}</h2>
            <p>Autor: {libro.autor}</p>
            <p>Precio: ${libro.precio}</p>
            <p>Sinopsis: {libro.sinopsis}</p>
            <p>Categoría: {libro.categoria}</p>
        </div>
    );
};

export default DetalleLibro;