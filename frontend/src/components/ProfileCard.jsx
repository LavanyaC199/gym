import { useEffect, useState } from "react";
import api from "../services/api";

export default function ProfileCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/me").then(res => setUser(res.data));
  }, []);

  if (!user) return null;

  return (
    <div className="card">
      <h3>👤 My Fitness Profile</h3>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Goal:</b> {user.goal || "Not set"}</p>
    </div>
  );
}
