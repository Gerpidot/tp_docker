const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Servir archivos estáticos (html, css, js) desde /public
app.use(express.static(path.join(__dirname, "public")));

// API endpoints
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde la API!" });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime().toFixed(0) + "s",
    timestamp: new Date().toISOString(),
  });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
