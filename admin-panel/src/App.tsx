import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Industries from './pages/Industries';
import Services from './pages/Services';
import Trainings from './pages/Trainings';
import Enrollments from './pages/Enrollments';
import Inquiries from './pages/Inquiries';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Users />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/industries"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Industries />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Services />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/trainings"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Trainings />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/enrollments"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Enrollments />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/inquiries"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Inquiries />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Settings />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Profile />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
