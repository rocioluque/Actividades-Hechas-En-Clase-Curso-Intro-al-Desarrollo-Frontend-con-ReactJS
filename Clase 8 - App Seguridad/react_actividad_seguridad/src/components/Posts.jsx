import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BarLoader from "react-spinners/BarLoader";
import { useAuth0 } from "@auth0/auth0-react";

function Posts() {
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const token = await getAccessTokenSilently();

                console.log('ID Token:', token);


                const respuesta = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                , {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                } );

                setPublicaciones(respuesta.data);
                setCargando(false);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                toast.error('Error al obtener los datos');
                setCargando(false);
            }
        };
        obtenerDatos();
    }, []);

    return (
        <Container>
            <ToastContainer />
            {cargando ? (
                <div className="d-flex justify-content-center">
                    <BarLoader />
                </div>
            ) : (
                <ListGroup>
                    {publicaciones.map((publicacion) => (
                        <ListGroup.Item key={publicacion.id}>{publicacion.title}</ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
}

export default Posts;