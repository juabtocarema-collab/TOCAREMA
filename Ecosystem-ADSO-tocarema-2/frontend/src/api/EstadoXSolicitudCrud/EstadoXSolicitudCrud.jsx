import { useEffect, useState } from "react";
import { getAll, create, update, remove } from "../api/estadoxsolicitud";

export default function EstadoXSolicitudCrud() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id_solicitud: "",
    id_estado_solicitud: ""
  });

  const loadData = async () => {
    const res = await getAll();
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(form);
    setForm({ id_solicitud: "", id_estado_solicitud: "" });
    loadData();
  };

  const handleDelete = async (id) => {
    await remove(id);
    loadData();
  };

  return (
    <div>
      <h1>CRUD Estado x Solicitud</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="ID Solicitud"
          value={form.id_solicitud}
          onChange={(e) => setForm({ ...form, id_solicitud: e.target.value })}
        />
        <input
          placeholder="ID Estado Solicitud"
          value={form.id_estado_solicitud}
          onChange={(e) =>
            setForm({ ...form, id_estado_solicitud: e.target.value })
          }
        />
        <button type="submit">Guardar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Solicitud</th>
            <th>ID Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id_estadoxsolicitud}>
              <td>{row.id_estadoxsolicitud}</td>
              <td>{row.id_solicitud}</td>
              <td>{row.id_estado_solicitud}</td>
              <td>
                <button onClick={() => handleDelete(row.id_estadoxsolicitud)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
