import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Nosotros from "./pages/nosotros";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>

        {/*  Rutas con Navbar y Breadcrum */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<div>Contacto</div>} />
        </Route>

        {/*  Rutas sin Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;