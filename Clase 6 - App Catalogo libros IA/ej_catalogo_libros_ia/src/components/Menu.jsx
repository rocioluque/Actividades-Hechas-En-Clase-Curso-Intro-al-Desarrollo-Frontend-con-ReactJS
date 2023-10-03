import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <nav className="nav">
                <Link to="/">Inicio</Link>
                <Link to="/acerca-de">Acerca de</Link>              
            </nav>
        </>
    );
}

export default Menu;