import { useEffect, useState } from "react";
import api from "../services/api";

export default function ActivityMonitor() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    api.get("/admin/progress").then(res => setProgress(res.data));
  }, []);

  return (
    <div className="card">
      <h3>📈 User Activity & Progress</h3>
      <p>Total Logs: {progress.length}</p>
    </div>
  );
}
