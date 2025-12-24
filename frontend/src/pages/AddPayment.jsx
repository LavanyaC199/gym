import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";

export default function AddPayment() {
  const [form, setForm] = useState({
    userId: "",
    month: "",
    amount: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/admin/payment", form);
    alert("Payment added");
  };

  return (
    <DashboardLayout>
      <h2>Add Payment</h2>

      <div className="card">
        <form onSubmit={submit} className="modern-form">
          <input placeholder="User ID" onChange={e => setForm({ ...form, userId: e.target.value })} />
          <input placeholder="Month" onChange={e => setForm({ ...form, month: e.target.value })} />
          <input type="number" placeholder="Amount" onChange={e => setForm({ ...form, amount: e.target.value })} />
          <button className="btn-gradient">Add Payment</button>
        </form>
      </div>
    </DashboardLayout>
  );
}
