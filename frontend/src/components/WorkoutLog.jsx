import { useState } from "react";

export default function WorkoutLog() {
  const [workout, setWorkout] = useState("");

  return (
    <div className="card">
      <h3>🏋️ Daily Workout Log</h3>
      <input
        placeholder="Workout details"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      />
      <button className="btn-primary">Save Workout</button>
    </div>
  );
}
