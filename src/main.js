// Punto de entrada de la app: crea el servidor Express y conecta
// cada grupo de rutas a su prefijo (/users, /products, /persons).
const express = require("express");
const path = require("path");

const usersRoutes = require("./presentation/users/users.routes");
const productsRoutes = require("./presentation/products/products.routes");
const personsRoutes = require("./presentation/persons/persons.routes");

const app = express();
app.use(express.json()); // permite leer JSON en req.body

// Sirve las pantallas HTML de la carpeta presentation.
app.use(express.static(path.join(__dirname, "presentation")));

app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/persons", personsRoutes);

app.listen(3000, () => console.log("API en http://localhost:3000"));
