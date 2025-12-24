import { useState } from "react";

export default function TrainerChat() {
  const [msg, setMsg] = useState("");

  return (
    <div className="card">
      <h3>💬 Client Communication</h3>
      <textarea
        placeholder="Message client"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="btn-primary">Send Message</button>
    </div>
  );
}
