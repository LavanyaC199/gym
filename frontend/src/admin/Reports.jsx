import { useEffect, useState } from "react";
import api from "../services/api";

export default function Reports() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    api.get("/admin/reports").then(res => setReport(res.data));
  }, []);

  if (!report) return null;

  return (
    <div className="card">
      <h3>📊 Reports</h3>
      <p>Total Users: {report.totalUsers}</p>
      <p>Total Transactions: {report.totalTransactions}</p>
      <p>Total Revenue: ₹{report.totalRevenue}</p>
    </div>
  );
}
