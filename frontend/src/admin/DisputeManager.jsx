import { useEffect, useState } from "react";
import api from "../services/api";

export default function DisputeManager() {
  const [disputes, setDisputes] = useState([]);

  useEffect(() => {
    api.get("/admin/disputes").then(res => setDisputes(res.data));
  }, []);

  const resolve = async (id) => {
    await api.put(`/admin/dispute/${id}`);
    setDisputes(disputes.filter(d => d._id !== id));
  };

  return (
    <div className="card">
      <h3>⚠️ Dispute Resolution</h3>
      {disputes.map(d => (
        <div key={d._id}>
          {d.issue} - {d.status}
          <button onClick={() => resolve(d._id)}>Resolve</button>
        </div>
      ))}
    </div>
  );
}
