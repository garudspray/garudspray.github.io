import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("Checking password...");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "adminLogin",
          password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        sessionStorage.setItem("garudAdminToken", result.token);
        setMessage("Login successful.");

        // Later this will navigate to the admin dashboard.
        window.location.href = "/admin/dashboard";
      } else {
        setMessage("Invalid password.");
      }
    } catch {
      setMessage("Unable to connect to the server.");
    }
  }

  return (
    <section className="section page-section">
      <div className="container small-container">
        <h1>Admin Login</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          <button className="button button-primary" type="submit">
            Login
          </button>

          {message && <p className="form-status">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
