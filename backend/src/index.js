import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { pool } from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, lastName, email } = req.body;

  try {
    // 1️⃣ Guardar en MySQL
    const query = `
      INSERT INTO contacts (name, last_name, email)
      VALUES (?, ?, ?)
    `;
    await pool.execute(query, [name, lastName, email]);

    // 2️⃣ Enviar email con Brevo
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { email: process.env.EMAIL_FROM },
        to: [{ email: process.env.EMAIL_TO }],
        subject: "Nuevo formulario enviado",
        htmlContent: `
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Apellido:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "Datos guardados y email enviado" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

app.listen(4000, () => {
  console.log("Servidor backend corriendo en puerto 4000");
});
