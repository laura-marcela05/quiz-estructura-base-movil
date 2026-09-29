// Lógica de negocio de Producto: valida y delega el guardado al repositorio.
const productRepository = require("../infrastructure/database/productRepository");

function listarProductos() {
  return productRepository.findAll();
}

function crearProducto(nombre, precio) {
  if (!nombre || precio === undefined || precio === "") {
    throw new Error("nombre y precio son obligatorios");
  }
  if (isNaN(precio) || Number(precio) <= 0) {
    throw new Error("precio debe ser un número mayor a 0");
  }
  return productRepository.insert(nombre, Number(precio));
}

module.exports = { listarProductos, crearProducto };
