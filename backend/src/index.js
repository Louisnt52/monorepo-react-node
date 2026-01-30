import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, lastName, email } = req.body;

  try {
    const data = {
      sender: { email: process.env.EMAIL_FROM },
      to: [{ email: process.env.EMAIL_TO }],
      subject: "Nuevo formulario enviado",
      htmlContent: `<p>Nombre: ${name}</p><p>Apellido: ${lastName}</p><p>Email: ${email}</p>`,
    };

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      data,
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email enviado:", response.data);
    res.status(200).json({ message: "Email enviado correctamente" });
  } catch (error) {
    console.error("Error enviando email:", error.response?.data || error.message);
    res.status(500).json({ message: "Error enviando email", error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));
