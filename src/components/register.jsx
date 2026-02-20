import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");
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

  const checkPasswordStrength = (pwd) => {
    let strengthLevel = 0;
    if (pwd.length >= 8) strengthLevel++;
    if (/[A-Z]/.test(pwd)) strengthLevel++;
    if (/[0-9]/.test(pwd)) strengthLevel++;
    if (/[^A-Za-z0-9]/.test(pwd)) strengthLevel++;

    if (strengthLevel <= 1) {
      setStrength({ text: "Contraseña débil", className: "weak" });
    } else if (strengthLevel <= 3) {
      setStrength({ text: "Contraseña media", className: "medium" });
    } else {
      setStrength({ text: "Contraseña fuerte", className: "strong" });
    }
  };

  useEffect(() => {
    generarCaptcha();
  }, []);

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (pwd) checkPasswordStrength(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedCaptcha = captcha.trim();

    // Validar captcha (case-sensitive)
    if (trimmedCaptcha !== captchaValue) {
      setMessage({ text: "Captcha incorrecto", type: "error" });
      generarCaptcha();
      return;
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setMessage({ text: "Correo inválido", type: "error" });
      return;
    }

    // Validar contraseña fuerte
    const strongPass =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password);

    if (!strongPass) {
      setMessage({
        text: "Contraseña debe tener ≥8 caracteres, mayúscula, número y símbolo",
        type: "error",
      });
      return;
    }

    // Validar si el correo ya existe
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === trimmedEmail)) {
      setMessage({ text: "Correo ya registrado", type: "error" });
      return;
    }

    // Guardar usuario
    users.push({ name: trimmedName, email: trimmedEmail, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage({ text: "Cuenta creada ☕ Redirigiendo...", type: "success" });

    // Redirigir a login
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="register-container">
      <div className="box">
        <div className="title">Café Gourmet</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
              onChange={handlePasswordChange}
              required
            />
            <span
              className="toggle-pass"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          {strength && (
            <div className={`strength ${strength.className}`}>
              {strength.text}
            </div>
          )}

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

          <button type="submit">Crear cuenta</button>
        </form>

        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="link" onClick={() => navigate("/login")}>
          ¿Ya tienes cuenta? Inicia sesión ☕
        </div>
      </div>
    </div>
  );
}
