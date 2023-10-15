import {useForm} from "react-hook-form"

const FormularioAgregarLibro = ({agregarLibro}) => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        agregarLibro(data);
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div >
                <label htmlFor="título">Título: </label>
                <input 
                id="título"
                name="título"
                {...register("título",{ required: "Este campo es requerido"})}
                />
                {errors.título && <span>errors.título.message</span>}
            </div>
            <div >
                <label htmlFor="descripcion">Descripción: </label>
                <input 
                id="descripcion"
                name="descripcion"
                {...register("descripcion",{ required: "Este campo es requerido"})}
                />
                {errors.descripcion && <span>errors.descripcion.message</span>}
            </div>
            <div >
            <label htmlFor="autor">Autor: </label>
                <input 
                id="autor"
                name="autor"
                {...register("autor",{ required: "Este campo es requerido"})}
                />
                {errors.autor && <span>errors.autor.message</span>}
            </div>
            <div >
            <label htmlFor="categoria">Categoría: </label>
                <input 
                id="categoria"
                name="categoria"
                {...register("categoria",{ required: "Este campo es requerido"})}
                />
                {errors.categoria && <span>errors.categoria.message</span>}
            </div>
            <button type="submit">Agregar Libro</button>
        </form>
    );
};

export default FormularioAgregarLibro;