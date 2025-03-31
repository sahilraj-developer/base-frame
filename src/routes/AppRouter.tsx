import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProvider";
import ProtectedRoute from "../auth/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Home from "../pages/client/Home";
import Profile from "../pages/client/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Reports from "@/pages/admin/Reports";
import Settings from "@/pages/admin/Settings";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Users />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />


          <Route
            path="/admin/reports"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Reports />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/admin/settings"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Settings />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />


          {/* Protected Client Routes */}
          <Route
            path="/client/*"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Home />
                </ClientLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/profile"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Profile />
                </ClientLayout>
              </ProtectedRoute>
            }
          />

          {/* Redirect Root Path */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
