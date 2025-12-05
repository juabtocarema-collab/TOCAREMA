import EstadoXEquipo from "../models/estadoxequipoModel.js";

export const getAll = async (req, res) => {
  try {
    const datos = await EstadoXEquipo.findAll();
    res.json(datos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const dato = await EstadoXEquipo.findByPk(req.params.id);
    res.json(dato);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  try {
    await EstadoXEquipo.create(req.body);
    res.json({ message: "Estado creado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    await EstadoXEquipo.update(req.body, {
      where: { id_estado_equipo: req.params.id },
    });
    res.json({ message: "Estado actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await EstadoXEquipo.destroy({
      where: { id_estado_equipo: req.params.id },
    });
    res.json({ message: "Estado eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
