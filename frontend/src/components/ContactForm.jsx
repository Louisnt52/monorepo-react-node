import { useState } from "react";
import "../style/form.css";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", lastName: "", email: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setFormData({ name: "", lastName: "", email: "" });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error(error);
      alert("Error enviando formulario");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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