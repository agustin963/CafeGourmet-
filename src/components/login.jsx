import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null); // {text, type}

  // Generar captcha
  const generarCaptcha = () => {
    const chars =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let str = "";
    for (let i = 0; i < 5; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaValue(str);
  };

  useEffect(() => {
    generarCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    if (captcha !== captchaValue) {
      setMessage({ text: "Captcha incorrecto", type: "error" });
      generarCaptcha();
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setMessage({
        text: "Correo o contraseña incorrectos",
        type: "error",
      });
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));
    setMessage({
      text: "Bienvenido ☕ Redirigiendo...",
      type: "success",
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="box">
        <div className="title">Café Gourmet</div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-pass"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          <div className="captcha-box">
            <div className="captcha-text">{captchaValue}</div>
            <button type="button" onClick={generarCaptcha}>
              🔄
            </button>
          </div>

          <input
            type="text"
            placeholder="Escribe el captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />

          <button type="submit">Iniciar sesión</button>
        </form>

        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="link" onClick={() => navigate("/register")}>
          ¿No tienes cuenta? Crear una ☕
        </div>
      </div>
    </div>
  );
}