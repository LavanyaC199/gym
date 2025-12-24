export default function AppointmentBooking() {
  return (
    <div className="card">
      <h3>📅 Trainer Appointments</h3>
      <input placeholder="Trainer ID" />
      <input type="date" />
      <button className="btn-primary">Book Appointment</button>
    </div>
  );
}
