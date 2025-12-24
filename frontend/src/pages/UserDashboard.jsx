import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

// Dashboard components
import ProfileCard from "../components/ProfileCard";
import ProgressChart from "../components/ProgressChart";
import WorkoutLog from "../components/WorkoutLog";
import NutritionLog from "../components/NutritionLog";
import AppointmentBooking from "../components/AppointmentBooking";
import ChatBox from "../components/ChatBox";
import PaymentCard from "../components/PaymentCard";
import WorkoutPlans from "../components/WorkoutPlans";
import FeedbackForm from "../components/FeedbackForm";
import WorkoutTracker from "../components/WorkoutTracker";
import NutritionTracker from "../components/NutritionTracker";
import Recommendation from "../components/Recommendation";
import Reminder from "../components/Reminder";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get("/auth/me").then((res) => setUser(res.data));
    api.get("/user/payments").then((res) => setPayments(res.data));
  }, []);

  const chartData = {
    labels: payments.map((p) => p.month),
    datasets: [
      {
        label: "Payments",
        data: payments.map((p) => p.amount),
      },
    ],
  };

  return (
    <DashboardLayout>
      <h2>User Dashboard</h2>

      {/* PROFILE + FITNESS INFO */}
      {user && (
        <>
          <div className="card">
            <h3>👤 My Profile</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>

          <div className="card">
            <h3>🏋️ My Fitness Profile</h3>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Height:</strong> {user.height} cm</p>
            <p><strong>Weight:</strong> {user.weight} kg</p>
            <p><strong>Goal:</strong> {user.goal}</p>
          </div>
          
        </>
      )}

      {/* PAYMENT CHART */}
      <div className="card">
        <h3>💳 Payment History</h3>
        {payments.length > 0 ? <Bar data={chartData} /> : <p>No payments</p>}
      </div>

      {/* ADVANCED DASHBOARD SECTIONS */}
      <ProfileCard />
      <ProgressChart />
      <WorkoutLog />
      <NutritionLog />
      <AppointmentBooking />
      <ChatBox />
      <PaymentCard />
      <WorkoutPlans />
      <FeedbackForm />
      <WorkoutTracker />
<NutritionTracker />
<Recommendation goal="weight loss" />
<Reminder />
    </DashboardLayout>
  );
}
