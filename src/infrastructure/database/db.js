const Database = require("better-sqlite3");
const path = require("path");

// Un solo archivo .db en la raíz del proyecto. Se crea solo si no existe.
const db = new Database(path.join(__dirname, "../../../app.db"));

// Se crean las tablas al arrancar, si no existen todavía.
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    edad INTEGER NOT NULL
  );
`);

module.exports = db;
