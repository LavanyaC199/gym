import { useState } from "react";

export default function NutritionLog() {
  const [calories, setCalories] = useState("");

  return (
    <div className="card">
      <h3>🥗 Nutrition Log</h3>
      <input
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button className="btn-primary">Save Nutrition</button>
    </div>
  );
}
