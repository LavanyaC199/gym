export default function Landing() {
  return (
    <div className="landing">
      <h1>🏋️ Gym Management System</h1>
      <p>Train smarter. Track better. Transform faster.</p>

      <div>
        <button onClick={() => window.location.href = "/"}>
          Login
        </button>
        <button onClick={() => window.location.href = "/register"}>
          Register
        </button>
      </div>
    </div>
  );
}
