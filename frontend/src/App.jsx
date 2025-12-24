import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      
<Routes>
  <Route path="/" element={<Intro />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/user" element={<UserDashboard />} />
  <Route path="/trainer" element={<TrainerDashboard />} />
  <Route path="/admin" element={<AdminDashboard />} />

</Routes>

        
     
    
    </BrowserRouter>
  );
}
