import { useEffect, useState } from "react";
import api from "../services/api";

export default function TrainerApproval() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    api.get("/admin/trainer-requests").then(res => setRequests(res.data));
  }, []);

  const approve = async (id) => {
    await api.put(`/admin/approve-trainer/${id}`);
    setRequests(requests.filter(r => r._id !== id));
  };

  return (
    <div className="card">
      <h3>✅ Trainer Approvals</h3>
      {requests.map(r => (
        <div key={r._id}>
          {r.documentName}
          <button onClick={() => approve(r._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}
