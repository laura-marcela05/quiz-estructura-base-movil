// Persistencia de usuarios: único lugar con SQL de la tabla users.
const db = require("./db");

function findAll() {
  return db.prepare("SELECT * FROM users").all();
}

function insert(nombre, email) {
  const r = db
    .prepare("INSERT INTO users (nombre, email) VALUES (?, ?)")
    .run(nombre, email);
  return { id: r.lastInsertRowid, nombre, email };
}

module.exports = { findAll, insert };
