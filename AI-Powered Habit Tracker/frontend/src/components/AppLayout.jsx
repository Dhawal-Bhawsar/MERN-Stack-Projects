import { BarChart3, Brain, CalendarDays, Grid2X2, ListChecks, LogOut, Moon, Settings, Sparkles } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  ["/dashboard", "Dashboard", Grid2X2],
  ["/habits", "Habits", ListChecks],
  ["/weekly", "Weekly", CalendarDays],
  ["/insights", "Insights", Brain],
  ["/stats", "Statistics", BarChart3],
];

export default function AppLayout() {
  const { user, logout } = useAuth();
  const { toggle } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="app-shell min-h-screen">
      <aside className="app-sidebar">
        <NavLink to="/dashboard" className="app-brand">
          <span className="app-brand-mark"><Sparkles size={18} /></span>
          <span>AI Habit Tracker</span>
        </NavLink>
        <nav className="app-nav">
          {links.map(([to, label, Icon]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `app-nav-link${isActive ? " active" : ""}`}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="app-sidebar-bottom">
          <button className="app-nav-link" onClick={toggle}><Moon size={18} /><span>Dark mode</span></button>
          <button className="app-nav-link"><Settings size={18} /><span>Settings</span></button>
          <div className="app-user">
            <span className="app-avatar">{user?.name?.charAt(0)?.toUpperCase() || "U"}</span>
            <span className="min-w-0 flex-1"><strong>{user?.name || "User"}</strong><small>{user?.email || ""}</small></span>
            <button aria-label="Log out" onClick={() => { logout(); navigate("/"); }}><LogOut size={17} /></button>
          </div>
        </div>
      </aside>
      <main className="app-main"><Outlet /></main>
    </div>
  );
}
