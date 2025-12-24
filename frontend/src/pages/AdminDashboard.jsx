import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import { Bar, Pie } from "react-chartjs-2";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then(res => setUsers(res.data));
    api.get("/admin/payments").then(res => setPayments(res.data));
  }, []);

  const roleCount = {
    user: users.filter(u => u.role === "user").length,
    trainer: users.filter(u => u.role === "trainer").length,
    admin: users.filter(u => u.role === "admin").length,
  };

  const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <DashboardLayout>
      <h2>Admin Analytics</h2>

      <div className="card-grid">
        <div className="stat-card">👥 Total Users<br />{users.length}</div>
        <div className="stat-card">💰 Revenue<br />₹{totalRevenue}</div>
      </div>

      <div className="card">
        <h3>User Roles</h3>
        <Pie
          data={{
            labels: ["Users", "Trainers", "Admins"],
            datasets: [{
              data: [roleCount.user, roleCount.trainer, roleCount.admin],
            }],
          }}
        />
      </div>

      <div className="card">
        <h3>Monthly Revenue</h3>
        <Bar
          data={{
            labels: payments.map(p => p.month),
            datasets: [{ label: "Revenue", data: payments.map(p => p.amount) }],
          }}
        />
      </div>
    </DashboardLayout>
  );
}
