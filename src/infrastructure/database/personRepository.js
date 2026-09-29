// Persistencia de personas: único lugar con SQL de la tabla persons.
const db = require("./db");

function findAll() {
  return db.prepare("SELECT * FROM persons").all();
}

function insert(nombre, edad) {
  const r = db
    .prepare("INSERT INTO persons (nombre, edad) VALUES (?, ?)")
    .run(nombre, edad);
  return { id: r.lastInsertRowid, nombre, edad };
}

module.exports = { findAll, insert };
