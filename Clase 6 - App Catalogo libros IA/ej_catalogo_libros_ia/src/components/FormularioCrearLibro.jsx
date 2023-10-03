import {useForm} from 'react-hook-form';

const FormularioCrearLibro = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" id="titulo"{...register("titulo", {required: true})} />
                {errors.titulo && <p>Este titulo es obligatorio</p>}
            </div>
            <div>
                <label htmlFor="autor">Autor</label>
                <input type="text" id="autor"{...register("autor", {required: true})} />
                {errors.autor && <p>Este autor es obligatorio</p>}
            </div>
            <div>
                <label htmlFor="precio">Precio</label>
                <input type="number" id="precio"{...register("precio", {required: true})} />
                {errors.precio && <p>Este precio es obligatorio</p>}
            </div>
            <div>
                <label htmlFor="sinopsis">Sinopsis</label>
                <input type="text" id="sinopsis"{...register("sinopsis", {required: true})} />
                {errors.sinopsis && <p>Este sinopsis es obligatorio</p>}
            </div>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria"{...register("categoria", {required: true})} />
                {errors.categoria && <p>Este categoria es obligatorio</p>}
            </div>
            <button type="submit">Crear Libro</button>
        </form>
        </>
    )
}

export default FormularioCrearLibro;