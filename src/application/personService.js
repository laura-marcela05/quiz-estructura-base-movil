// Lógica de negocio de Persona: valida y delega el guardado al repositorio.
const personRepository = require("../infrastructure/database/personRepository");

function listarPersonas() {
  return personRepository.findAll();
}

function crearPersona(nombre, edad) {
  if (!nombre || edad === undefined || edad === "") {
    throw new Error("nombre y edad son obligatorios");
  }
  if (isNaN(edad) || Number(edad) < 0) {
    throw new Error("edad debe ser un número válido");
  }
  return personRepository.insert(nombre, Number(edad));
}

module.exports = { listarPersonas, crearPersona };
