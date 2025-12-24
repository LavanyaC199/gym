// import { useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout";
// import api from "../services/api";

// export default function TrainerDashboard() {
//   const [userId, setUserId] = useState("");
//   const [workouts, setWorkouts] = useState([]);

//   const loadWorkouts = async () => {
//     const res = await api.get(`/trainer/workouts/${userId}`);
//     setWorkouts(res.data);
//   };

//   return (
//     <DashboardLayout>
//       <h2>Trainer Panel</h2>

//       <div className="card">
//         <input
//           placeholder="Enter User ID"
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <button className="btn-primary" onClick={loadWorkouts}>
//           View Workouts
//         </button>

//         {workouts.map((w) => (
//           <div key={w._id} className="mini-card">
//             <strong>{w.day}</strong>
//             <p>{w.workout}</p>
//           </div>
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// }
import DashboardLayout from "../layouts/DashboardLayout";
import TrainerProfile from "../trainer/TrainerProfile";
import VerificationUpload from "../trainer/VerificationUpload";
import WorkoutManager from "../trainer/WorkoutManager";
import ClientProgress from "../trainer/ClientProgress";
import TrainerChat from "../trainer/TrainerChat";
import Earnings from "../trainer/Earnings";
import TrainerFeedback from "../trainer/TrainerFeedback";

export default function TrainerDashboard() {
  return (
    <DashboardLayout>
      <h2>Trainer Dashboard</h2>

      <TrainerProfile />
      <VerificationUpload />
      <WorkoutManager />
      <ClientProgress />
      <TrainerChat />
      <Earnings />
      <TrainerFeedback />
    </DashboardLayout>
  );
}
