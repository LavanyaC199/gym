import { useEffect, useState } from "react";
import api from "../services/api";

export default function ProgramManagement() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    api.get("/admin/programs").then(res => setPrograms(res.data));
  }, []);

  return (
    <div className="card">
      <h3>🏋️ Fitness Programs</h3>
      {programs.map(p => (
        <p key={p._id}>{p.day}: {p.workout}</p>
      ))}
    </div>
  );
}
