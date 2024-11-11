import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './components/Dashboard.jsx';
import SubmitGarbagePage from './pages/SubmitGarbagePage.jsx';
import RedeemPointsPage from './pages/RedeemPointsPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import SignupPage from './pages/SignUpPage.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#2196f3',
    },
  },
});

function App() {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={user ? <DashboardPage user={user} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/submit"
            element={user ? <SubmitGarbagePage user={user} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/redeem"
            element={user ? <RedeemPointsPage user={user} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/admin"
            element={user && user.isAdmin ? <AdminDashboard /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
