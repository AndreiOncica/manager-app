import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard"; // Create a Dashboard component.

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks login status.

  const handleLogin = () => {
    setIsAuthenticated(true); // Update login status upon successful login.
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Dashboard Route */}
        <Route
          path="./pages/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="./pages/login" replace /> // Redirect to login if not authenticated.
            )
          }
        />

        {/* Default Redirect */}
        {/* <Route path="*" element={<Navigate to="./login" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
