import { useState } from "react";
import api from "../services/api";

export default function Reminder() {
  const [type, setType] = useState("workout");
  const [time, setTime] = useState("");

  const submit = async () => {
    await api.post("/track/reminder", { type, time });
    alert("Reminder set");
  };

  return (
    <div className="card">
      <h3>⏰ Reminders</h3>

      <select onChange={e => setType(e.target.value)}>
        <option value="workout">Workout</option>
        <option value="meal">Meal</option>
      </select>

      <input type="time" onChange={e => setTime(e.target.value)} />

      <button className="btn-primary" onClick={submit}>Set Reminder</button>
    </div>
  );
}
