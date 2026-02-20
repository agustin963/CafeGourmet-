import "../styles/style.css";
import { Link } from "react-router-dom";

function Nosotros() {
  return (
    <>
      

      {/* BANNER */}
      <section className="banner">
        <div className="banner-text">
          <h2>Sobre Nosotros</h2>
          <p>
            En Café Gourmet creemos que una buena taza de café puede transformar cualquier momento.
            Nuestra pasión es ofrecer calidad, sabor y una experiencia única.
          </p>
        </div>

        <div className="banner-img">
          <img src="/images/cafeteria.jpg" alt="Nuestro café" />
        </div>
      </section>

      {/* HISTORIA */}
      <section className="servicios">
        <h2>Nuestra Historia</h2>

        <p className="servicios-intro">
          Café Gourmet nació con la idea de crear un espacio acogedor donde el café artesanal
          y la comida gourmet se disfruten sin prisas.
        </p>

        <div className="servicios-detalle">
          <div className="servicio">
            <h3>Nuestros Inicios</h3>
            <p>
              Comenzamos como un pequeño proyecto local, enfocado en la selección
              de granos de alta calidad y recetas tradicionales.
            </p>
          </div>

          <div className="servicio">
            <h3>Nuestra Filosofía</h3>
            <p>
              Creemos en el trato cercano, los ingredientes frescos y en ofrecer siempre
              una experiencia cálida a cada cliente.
            </p>
          </div>

          <div className="servicio">
            <h3>Nuestro Equipo</h3>
            <p>
              Contamos con baristas y personal capacitado que comparten la pasión
              por el café y el buen servicio.
            </p>
          </div>
        </div>
      </section>

      {/* MISION VISION VALORES */}
      <section className="destacados">
        <h2>Misión, Visión y Valores</h2>

        <div className="destacados-container">
          <div className="destacado-card">
            <h3>Misión</h3>
            <p>
              Brindar productos de café y alimentos gourmet de alta calidad,
              creando momentos especiales para nuestros clientes.
            </p>
          </div>

          <div className="destacado-card">
            <h3>Visión</h3>
            <p>
              Ser una cafetería referente por su sabor, atención y ambiente,
              reconocida por su compromiso con la calidad.
            </p>
          </div>

          <div className="destacado-card">
            <h3>Valores</h3>
            <p>
              Calidad, pasión, honestidad, respeto y atención personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="servicios-extra">
        <p><strong>¿Quieres conocernos más?</strong></p>
        <p>
          Visítanos y disfruta de una experiencia única en Café Gourmet.
        </p>

        <Link to="/contacto" className="btn-banner">
          Contáctanos
        </Link>
      </section>
    </>
  );
}

export default Nosotros;
                                