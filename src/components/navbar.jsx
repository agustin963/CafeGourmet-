import "../styles/style.css";
import { Link } from "react-router-dom";
import logoCafe from "../assets/logoCafe.jpg";

function Navbar() {
  return (
    <nav>
      <div className="tituloo">
        <h1 className="titulooo">Cafe gourmet</h1>
      </div>

      <div className="imgLogo">
        <img src={logoCafe} alt="Logo Cafe Gourmet" />
      </div>

      <div className="nav-menu">
        <Link to="/" className="nav-btn">
          Inicio
        </Link>

        <Link to="/menu" className="nav-btn">
          Menú
        </Link>

        <Link to="/nosotros" className="nav-btn">
          Nosotros
        </Link>

        <Link to="/contacto" className="nav-btn">
          Contacto
        </Link>
      </div>

      <div className="carritooo">
        <Link to="/carrito" className="carrito">
          🛒
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;