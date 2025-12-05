import { useState } from "react";
import { create } from "../api/estadoxsolicitud";

export default function EstadoXSolicitudForm({ onSaved }) {
  const [form, setForm] = useState({
    id_solicitud: "",
    id_estado_solicitud: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(form);
    setForm({ id_solicitud: "", id_estado_solicitud: "" });
    if (onSaved) onSaved();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Registrar Estado por Solicitud</h2>

      <label>ID Solicitud</label>
      <input
        type="number"
        name="id_solicitud"
        value={form.id_solicitud}
        onChange={handleChange}
        required
      />

      <label>ID Estado Solicitud</label>
      <input
        type="number"
        name="id_estado_solicitud"
        value={form.id_estado_solicitud}
        onChange={handleChange}
        required
      />

      <button type="submit">Guardar</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  }
};
