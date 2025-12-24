import { useState } from "react";
import api from "../services/api";
import AuthLayout from "../layouts/AuthLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        window.location.href = "/admin";
      } else if (res.data.role === "trainer") {
        window.location.href = "/trainer";
      } else {
        window.location.href = "/user";
      }
    } catch (err) {
      alert("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <AuthLayout>
      <div className="login-animate">
        <h2>Welcome Back 👋</h2>
        <p className="sub-text">Login to continue your fitness journey</p>

        <form onSubmit={submit} className="modern-form">
          <div className="input-group">
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="btn-gradient">
            Login
          </button>

          <p
            className="auth-link"
            onClick={() => (window.location.href = "/register")}
          >
            New here? <span>Create account</span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}
