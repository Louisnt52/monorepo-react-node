import { useState } from "react";
import "../style/form.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Formulario enviado (demo)");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Formulario de Contacto</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <button type="submit">Confirmar</button>
    </form>
  );
}

export default ContactForm;