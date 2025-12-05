import { Sequelize } from "sequelize";

// Como parámetros van: el nombre de la bd, el usuario de la bd, la contraseña, {el servidor y el tipo de base de datos}
const db = new Sequelize('ecosystem', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
