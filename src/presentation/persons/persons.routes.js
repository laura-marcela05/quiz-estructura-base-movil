// Rutas HTTP de Persona. Mismo patrón que las otras dos rutas.
const express = require("express");
const {
  listarPersonas,
  crearPersona,
} = require("../../application/personService");

const router = express.Router();

// GET /persons -> devuelve la lista completa
router.get("/", (req, res) => {
  res.json(listarPersonas());
});

// POST /persons -> crea una persona nueva con los datos del body
router.post("/", (req, res) => {
  try {
    const { nombre, edad } = req.body;
    const nuevo = crearPersona(nombre, edad);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
