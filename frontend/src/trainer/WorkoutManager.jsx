import { useState } from "react";
import api from "../services/api";

export default function WorkoutManager() {
  const [form, setForm] = useState({
    userId: "",
    day: "",
    workout: "",
  });

  const submit = async () => {
    await api.post("/trainer/assign", form);
    alert("Workout program created");
  };

  return (
    <div className="card">
      <h3>🏋️ Workout Program Management</h3>
      <input placeholder="Client User ID" onChange={e => setForm({ ...form, userId: e.target.value })} />
      <input placeholder="Day" onChange={e => setForm({ ...form, day: e.target.value })} />
      <textarea placeholder="Workout Plan" onChange={e => setForm({ ...form, workout: e.target.value })} />
      <button className="btn-primary" onClick={submit}>Assign Workout</button>
    </div>
  );
}
