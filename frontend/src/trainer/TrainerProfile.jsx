// import { useEffect, useState } from "react";
// import api from "../services/api";

// export default function TrainerProfile() {
//   const [trainer, setTrainer] = useState(null);

//   useEffect(() => {
//     api.get("/auth/me").then(res => setTrainer(res.data));
//   }, []);

//   if (!trainer) return null;

//   return (
//     <div className="card">
//       <h3>👨‍🏫 Trainer Profile</h3>
//       <p><b>Name:</b> {trainer.name}</p>
//       <p><b>Email:</b> {trainer.email}</p>
//       <p><b>Role:</b> {trainer.role}</p>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import api from "../services/api";

export default function TrainerProfile() {
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    api.get("/auth/me").then(res => setTrainer(res.data));
  }, []);

  if (!trainer) return null;

  return (
    <div className="card">
      <h3>👨‍🏫 Trainer Profile</h3>
      <p><b>Name:</b> {trainer.name}</p>
      <p><b>Email:</b> {trainer.email}</p>
      <p><b>Role:</b> {trainer.role}</p>
    </div>
  );
}
