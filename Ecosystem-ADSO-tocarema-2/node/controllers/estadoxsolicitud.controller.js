import EstadoXSolicitud from "../models/estadoxsolicitud.model.js";

export const getAll = async (req, res) => {
  try {
    const data = await EstadoXSolicitud.findAll();
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await EstadoXSolicitud.findByPk(req.params.id);
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  try {
    await EstadoXSolicitud.create(req.body);
    res.json({ message: "Creado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    await EstadoXSolicitud.update(req.body, {
      where: { id_estadoxsolicitud: req.params.id },
    });
    res.json({ message: "Actualizado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await EstadoXSolicitud.destroy({
      where: { id_estadoxsolicitud: req.params.id },
    });
    res.json({ message: "Eliminado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
