import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Register() {
  const { user, register } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to="/dashboard" replace />;

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      navigate("/dashboard", { replace: true });
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <button
        onClick={toggle}
        className="fixed top-4 right-4 p-2.5 rounded-xl glass"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center mb-6 gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center">
            <Sparkles size={18} />
          </div>
          <span className="font-semibold text-lg">AI Habit Tracker</span>
        </Link>
        <div className="card p-7">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-sm text-muted mt-1">Start building better habits today.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="label" htmlFor="name">Name</label>
              <input id="name" className="input" autoComplete="name" value={form.name} onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))} required />
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" className="input" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))} required />
            </div>
            <div>
              <label className="label" htmlFor="password">Password</label>
              <input id="password" className="input" type="password" autoComplete="new-password" minLength={6} value={form.password} onChange={(e) => setForm((current) => ({ ...current, password: e.target.value }))} required />
            </div>
            {error && <p className="text-sm text-rose-500">{error}</p>}
            <button type="submit" className="btn-primary w-full py-3" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
          <p className="text-center mt-5 text-sm text-soft">
            Already have an account? <Link to="/login" className="text-brand-600 dark:text-brand-300 font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
