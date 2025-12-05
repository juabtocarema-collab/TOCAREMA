import { DataTypes } from "sequelize";
import db from "../database/db.js";

const EstadoXEquipo = db.define(
  "estado_x_equipo",
  {
    id_estado_equipo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_estado_equipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "estado_x_equipo",
    timestamps: false,
  }
);

export default EstadoXEquipo;
