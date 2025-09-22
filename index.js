const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("🚀 Hola Mundo! Tambien podès acceder a la api con la ruta /api/hello y recibir el mensaje desde la api");
});

// Ejemplo de API REST
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde la API!" });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
