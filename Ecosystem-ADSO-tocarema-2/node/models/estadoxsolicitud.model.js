import { DataTypes } from "sequelize";
import db from "../database/db.js";

const EstadoXSolicitud = db.define(
  "estadoxsolicitud",
  {
    id_estadoxsolicitud: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Id_solicitud: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_estado_solicitud: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdat: {
      type: DataTypes.DATE,
    },
    updatedat: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "estadoxsolicitud",
    timestamps: false,
  }
);

export default EstadoXSolicitud;
