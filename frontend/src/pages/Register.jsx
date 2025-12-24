import { useState } from "react";
import api from "../services/api";
import AuthLayout from "../layouts/AuthLayout";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    alert("Registration successful");
    window.location.href = "/";
  };

  return (
    <AuthLayout>
      <div className="auth-header">
        <h2>Create Account</h2>
        <p>Join our fitness community 💪</p>
      </div>

      <form onSubmit={submit} className="modern-form">
        <div className="input-group">
          <input
            type="text"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <label>Email Address</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <label>Password</label>
        </div>

        <div className="input-group">
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="user">Gym Member</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>
          <label>Register As</label>
        </div>

        <button className="btn-gradient">Create Account</button>

        <p className="auth-link" onClick={() => (window.location.href = "/")}>
          Already have an account? <span>Login</span>
        </p>
      </form>
    </AuthLayout>
  );
}
