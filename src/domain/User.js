// Solo describe la forma de un Usuario. No sabe nada de SQLite ni de HTTP.
class User {
  constructor(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }
}

module.exports = User;
