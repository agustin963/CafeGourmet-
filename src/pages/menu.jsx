import { useState } from "react";
import "../styles/style.css";
import Chocolate from "../assets/chocolate.jpg";

function Menu() {
  const [busqueda, setBusqueda] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  const productos = [
    {
      id: 1,
      nombre: "Café Latte",
      descripcion: "Suave con espuma cremosa.",
      precio: 23.5,
      imagen: Chocolate,
    },
    {
      id: 2,
      nombre: "Cappuccino",
      descripcion: "Equilibrio perfecto de café y leche.",
      precio: 28.5,
      imagen: Chocolate,
    },
    {
      id: 3,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
    {
      id: 4,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
     {
      id: 5,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
    {
      id: 6,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
     {
      id: 7,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
    {
      id: 8,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
     {
      id: 9,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
    {
      id: 10,
      nombre: "Pastel Tres Leches",
      descripcion: "Delicioso postre con tres tipos de leche.",
      precio: 20.5,
      imagen: Chocolate,
    },
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideTexto = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincidePrecio =
      (precioMin === "" || producto.precio >= parseFloat(precioMin)) &&
      (precioMax === "" || producto.precio <= parseFloat(precioMax));

    return coincideTexto && coincidePrecio;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setPrecioMin("");
    setPrecioMax("");
  };

  return (
    <div className="menu-container">
    
      <div className="buttons">
        <div className="filtro-precio">
          <input
            type="number"
            placeholder="Precio mínimo"
            value={precioMin}
            onChange={(e) => setPrecioMin(e.target.value)}
          />

          <input
            type="number"
            placeholder="Precio máximo"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
          />

          <button className="btn-limpiar" onClick={limpiarFiltros}>
            Limpiar filtros
          </button>
        </div>
        <div class = "btn btnMenu active">Todo</div>
            <div class="btn btnComidas">Comidas</div>
            <div class="btn btnBebidas">Bebidas</div>
            <div class="btn btnPostres">Postres</div>
            <div class="btn btnOfertas">Ofertas</div>

        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <h2>Bebidas Disponibles</h2>

      <div className="bebidas-container">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div className="bebida-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p className="precio">${producto.precio.toFixed(2)}</p>
              <button className="add-cart-btn">
                Añadir al carrito
              </button>
            </div>
          ))
        ) : (
          <p className="mensajeNoResultados">
            Producto no encontrado
          </p>
        )}
      </div>
    </div>
  );
}

export default Menu;