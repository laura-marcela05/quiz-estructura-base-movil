// Rutas HTTP de Producto. Mismo patrón que users.routes.js.
const express = require("express");
const {
  listarProductos,
  crearProducto,
} = require("../../application/productService");

const router = express.Router();

// GET /products -> devuelve la lista completa
router.get("/", (req, res) => {
  res.json(listarProductos());
});

// POST /products -> crea un producto nuevo con los datos del body
router.post("/", (req, res) => {
  try {
    const { nombre, precio } = req.body;
    const nuevo = crearProducto(nombre, precio);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
