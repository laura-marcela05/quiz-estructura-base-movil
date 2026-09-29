// Persistencia de productos: único lugar con SQL de la tabla products.
const db = require("./db");

// Devuelve todos los productos.
function findAll() {
  return db.prepare("SELECT * FROM products").all();
}

// Inserta un producto y devuelve el registro creado.
function insert(nombre, precio) {
  const r = db
    .prepare("INSERT INTO products (nombre, precio) VALUES (?, ?)")
    .run(nombre, precio);
  return { id: r.lastInsertRowid, nombre, precio };
}

module.exports = { findAll, insert };
