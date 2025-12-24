import DashboardLayout from "../layouts/DashboardLayout";
import UserManagement from "../admin/UserManagement";
import TrainerApproval from "../admin/TrainerApproval";
import ProgramManagement from "../admin/ProgramManagement";
import ActivityMonitor from "../admin/ActivityMonitor";
import DisputeManager from "../admin/DisputeManager";
import Reports from "../admin/Reports";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h2>Admin Dashboard</h2>

      <UserManagement />
      <TrainerApproval />
      <ProgramManagement />
      <ActivityMonitor />
      <DisputeManager />
      <Reports />
    </DashboardLayout>
  );
}
