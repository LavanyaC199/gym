import { useEffect, useState } from "react";
import api from "../services/api";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  const remove = async (id) => {
    await api.delete(`/admin/user/${id}`);
    setUsers(users.filter(u => u._id !== id));
  };

  return (
    <div className="card">
      <h3>👤 User & Trainer Management</h3>
      {users.map(u => (
        <div key={u._id}>
          {u.name} ({u.role})
          <button onClick={() => remove(u._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
