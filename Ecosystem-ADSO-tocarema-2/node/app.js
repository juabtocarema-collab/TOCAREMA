import express from "express";
import cors from "cors";

// RUTAS
import estadoxequipoRoutes from "./routes/estadoxequipoRoutes.js";
import estadoxsolicitudRoutes from "./routes/estadoxsolicitud.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ================================
// MOCK DATA (Sin BD)
// ================================
const mockData = {
  // Registros que relacionan equipos con estados (tabla pivote)
  estadoxequipo: [
    { id_estadoxequipo: 1, id_equipo: 101, id_estado_equipo: 1 },
    { id_estadoxequipo: 2, id_equipo: 102, id_estado_equipo: 2 },
  ],
  estadoxsolicitud: [
    { id_estadoxsolicitud: 1, id_equipo: 101, id_estado_equipo: 1 },
    { id_estadoxsolicitud: 2, id_equipo: 102, id_estado_equipo: 2 },
  ],
};

// ================================
// RUTAS DE LA API (Registrar rutas con controlador -- si la BD no está presente, los mocks más abajo tomarán efecto si es necesario)
// ================================
// Si deseas usar el controlador que consulta la DB, descomenta las siguientes líneas.
// app.use("/api/estadoxequipo", estadoxequipoRoutes);
// app.use("/api/estadoxsolicitud", estadoxsolicitudRoutes);

// ================================
// MOCK ENDPOINTS (SIN DB)
// ================================
app.get("/api/estadoequipo", (req, res) => {
  res.json(mockData.estadoxequipo);
});

app.post("/api/estadoequipo", (req, res) => {
  const newItem = {
    id_estado_equipo: Math.max(...mockData.estadoxequipo.map(e => e.id_estado_equipo)) + 1,
    nombre_estado_equipo: req.body.nombre_estado || "Nuevo estado"
  };
  mockData.estadoxequipo.push(newItem);
  res.json({ message: "Creado correctamente", data: newItem });
});

app.put("/api/estadoequipo/:id", (req, res) => {
  const idx = mockData.estadoxequipo.findIndex(e => e.id_estado_equipo == req.params.id);
  if (idx !== -1) {
    mockData.estadoxequipo[idx] = { ...mockData.estadoxequipo[idx], ...req.body };
  }
  res.json({ message: "Actualizado correctamente" });
});

app.delete("/api/estadoequipo/:id", (req, res) => {
  mockData.estadoxequipo = mockData.estadoxequipo.filter(e => e.id_estado_equipo != req.params.id);
  res.json({ message: "Eliminado correctamente" });
});

// Rutas CRUD para la tabla pivote estadoxequipo (id_estadoxequipo)
app.get("/api/estadoxequipo", (req, res) => {
  res.json(mockData.estadoxequipo);
});

app.post("/api/estadoxequipo", (req, res) => {
  const newId = Math.max(0, ...mockData.estadoxequipo.map(e => e.id_estadoxequipo)) + 1;
  const newItem = {
    id_estadoxequipo: newId,
    id_equipo: req.body.id_equipo,
    id_estado_equipo: req.body.id_estado_equipo,
  };
  mockData.estadoxequipo.push(newItem);
  res.json({ message: "Creado correctamente", data: newItem });
});

app.put("/api/estadoxequipo/:id", (req, res) => {
  const idx = mockData.estadoxequipo.findIndex(e => e.id_estadoxequipo == req.params.id);
  if (idx !== -1) {
    mockData.estadoxequipo[idx] = { ...mockData.estadoxequipo[idx], ...req.body };
    return res.json({ message: "Actualizado correctamente", data: mockData.estadoxequipo[idx] });
  }
  res.status(404).json({ message: "No encontrado" });
});

app.delete("/api/estadoxequipo/:id", (req, res) => {
  const prevLen = mockData.estadoxequipo.length;
  mockData.estadoxequipo = mockData.estadoxequipo.filter(e => e.id_estadoxequipo != req.params.id);
  if (mockData.estadoxequipo.length < prevLen) {
    return res.json({ message: "Eliminado correctamente" });
  }
  res.status(404).json({ message: "No encontrado" });
});

// ================================
// INICIO DEL SERVIDOR (SIN CONECTAR A BD)
// ================================
console.log("Conexión a la BD deshabilitada (usando mock data)");

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});
