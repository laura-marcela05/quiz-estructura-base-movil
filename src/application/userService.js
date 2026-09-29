// Lógica de negocio de Usuario: valida y delega el guardado al repositorio.
const userRepository = require("../infrastructure/database/userRepository");

function listarUsuarios() {
  return userRepository.findAll();
}

function crearUsuario(nombre, email) {
  if (!nombre || !email) {
    throw new Error("nombre y email son obligatorios");
  }
  return userRepository.insert(nombre, email);
}

module.exports = { listarUsuarios, crearUsuario };
