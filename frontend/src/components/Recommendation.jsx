import { useEffect, useState } from "react";
import api from "../services/api";

export default function Recommendation({ goal }) {
  const [text, setText] = useState("");

  useEffect(() => {
    api.get(`/track/recommendation?goal=${goal}`)
      .then(res => setText(res.data.recommendation));
  }, [goal]);

  return (
    <div className="card">
      <h3>📌 Fitness Recommendation</h3>
      <p>{text}</p>
    </div>
  );
}
