import { Link } from "react-router-dom";

export default function Intro() {
  const isLoggedIn = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="intro-container">
      {/* ===== HEADER ===== */}
      <header className="intro-header">
        <h2>🏋️ Gym Management System</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          {!isLoggedIn && <Link to="/register">Register</Link>}
          {!isLoggedIn && <Link to="/">Login</Link>}
          {isLoggedIn && (
            <button className="btn-outline" onClick={logout}>
              Logout
            </button>
          )}
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <h1>Transform Your Fitness Journey</h1>
        <p>
          Smart gym management for members, trainers, and admins — all in one
          platform.
        </p>

        {!isLoggedIn && (
          <div className="hero-buttons">
            <Link to="/register" className="btn-gradient">
              Get Started
            </Link>
            <Link to="/" className="btn-outline">
              Login
            </Link>
          </div>
        )}
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="section" id="about">
        <h2>About Us</h2>
        <p>
          Our Gym Management System is designed to simplify gym operations by
          providing a centralized platform for managing users, trainers,
          workouts, and payments. We focus on efficiency, security, and user
          experience.
        </p>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section light" id="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <span>👤</span>
            <h3>Member Management</h3>
            <p>Track workouts, payments, and progress easily.</p>
          </div>

          <div className="feature-card">
            <span>👨‍🏫</span>
            <h3>Trainer Dashboard</h3>
            <p>Assign workouts and monitor member performance.</p>
          </div>

          <div className="feature-card">
            <span>📊</span>
            <h3>Admin Analytics</h3>
            <p>View revenue, users, and gym statistics.</p>
          </div>

          <div className="feature-card">
            <span>🔒</span>
            <h3>Secure System</h3>
            <p>JWT-based authentication and role-based access.</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="intro-footer">
        <p>© 2025 Gym Management System | MERN Stack Project</p>
      </footer>
    </div>
  );
}
