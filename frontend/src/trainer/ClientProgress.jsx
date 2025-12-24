import { useState } from "react";

export default function ClientProgress() {
  const [userId, setUserId] = useState("");

  return (
    <div className="card">
      <h3>📈 Client Progress Monitoring</h3>
      <input
        placeholder="Client User ID"
        onChange={(e) => setUserId(e.target.value)}
      />
      <p>View client weight, workout consistency, and improvements.</p>
      <button className="btn-primary">View Progress</button>
    </div>
  );
}
