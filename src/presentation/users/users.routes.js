// Rutas HTTP de Usuario. Solo recibe la petición y llama al servicio;
// no sabe nada de SQL ni de cómo se guarda el dato.
const express = require("express");
const {
  listarUsuarios,
  crearUsuario,
} = require("../../application/userService");

const router = express.Router();

// GET /users -> devuelve la lista completa
router.get("/", (req, res) => {
  res.json(listarUsuarios());
});

// POST /users -> crea un usuario nuevo con los datos del body
router.post("/", (req, res) => {
  try {
    const { nombre, email } = req.body;
    const nuevo = crearUsuario(nombre, email);
    res.status(201).json(nuevo); // 201 = creado
  } catch (error) {
    // Si el servicio lanzó un error de validación, respondemos 400
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
