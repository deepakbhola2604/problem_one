import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import AccessDenied from "./pages/AccessDenied";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Public Route */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "manager", "user"]}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Only */}
        <Route
          path="/users"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
            >
              <Users />
            </ProtectedRoute>
          }
        />

        {/* Admin + Manager */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "manager"]}
            >
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* Admin Only */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
            >
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* All Roles */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "manager", "user"]}
            >
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Access Denied */}
        <Route
          path="/access-denied"
          element={<AccessDenied />}
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<Login />}
        />

      </Routes>
    </>
  );
}

export default App;