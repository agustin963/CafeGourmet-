import "../styles/style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="banner">
        <div className="banner-text">
          <h2>Bienvenido a Cafe Gourmet</h2>
          <p>
            Descubre nuestras bebidas y comidas artesanales, hechas con el mejor café y los ingredientes más frescos.
          </p>

          <div className="banner-buttons">
            <Link to="/bebidas" className="btn-banner">
              Ver Bebidas
            </Link>
            <Link to="/comidas" className="btn-banner">
              Ver Comida
            </Link>
          </div>
        </div>

        <div className="banner-img">
          <img src="/images/san.jpg" alt="Cafe Gourmet" />
        </div>
      </section>

      {/* Sección Destacados */}
      <section className="favoritos">
        <h2>Nuestros Favoritos</h2>

        <div className="cards">
          <div className="card">
            <img src="/images/expreso.jpg" alt="Café Espresso" />
            <div className="card-text">
              <h3>Café Espresso</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios">
        <h2>Nuestros Servicios</h2>
        <p className="servicios-intro">
          Ofrecemos soluciones gastronómicas y experiencias café de alta calidad para nuestros clientes.
        </p>

        <div className="servicios-extra">
          <p><strong>Atención presencial</strong></p>
          <p><strong>Horarios:</strong> Lunes a Domingo, 8:00 a 22:00 hrs</p>

          <Link to="/contacto" className="btn-banner">
            Solicitar información
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;