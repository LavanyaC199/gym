import { useState } from "react";
import api from "../services/api";

export default function NutritionTracker() {
  const [form, setForm] = useState({
    meal: "",
    calories: "",
    protein: "",
    carbs: "",
    fats: "",
    date: "",
  });

  const submit = async () => {
    await api.post("/track/nutrition", form);
    alert("Meal logged");
  };

  return (
    <div className="card">
      <h3>🍽 Nutrition Tracking</h3>

      <input placeholder="Meal" onChange={e => setForm({ ...form, meal: e.target.value })} />
      <input placeholder="Calories" onChange={e => setForm({ ...form, calories: e.target.value })} />
      <input placeholder="Protein (g)" onChange={e => setForm({ ...form, protein: e.target.value })} />
      <input placeholder="Carbs (g)" onChange={e => setForm({ ...form, carbs: e.target.value })} />
      <input placeholder="Fats (g)" onChange={e => setForm({ ...form, fats: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, date: e.target.value })} />

      <button className="btn-primary" onClick={submit}>Save Meal</button>
    </div>
  );
}
