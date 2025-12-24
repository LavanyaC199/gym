import { useState } from "react";

export default function ChatBox() {
  const [msg, setMsg] = useState("");

  return (
    <div className="card">
      <h3>💬 Chat with Trainer</h3>
      <textarea
        placeholder="Type message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="btn-primary">Send</button>
    </div>
  );
}
