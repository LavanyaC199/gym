import { useState } from "react";
import api from "../services/api";

export default function WorkoutTracker() {
  const [form, setForm] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
    date: "",
  });

  const submit = async () => {
    await api.post("/track/workout", form);
    alert("Workout logged");
  };

  return (
    <div className="card">
      <h3>🏋️ Workout Tracking</h3>

      <input placeholder="Exercise" onChange={e => setForm({ ...form, exercise: e.target.value })} />
      <input placeholder="Sets" onChange={e => setForm({ ...form, sets: e.target.value })} />
      <input placeholder="Reps" onChange={e => setForm({ ...form, reps: e.target.value })} />
      <input placeholder="Weight (kg)" onChange={e => setForm({ ...form, weight: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, date: e.target.value })} />

      <button className="btn-primary" onClick={submit}>Save Workout</button>
    </div>
  );
}
