export default function Navbar() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <h2>🏋️ Gym</h2>
      <div>
        <button className="btn-outline" onClick={toggleTheme}>🌙</button>
        <button className="btn-danger" onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
}
