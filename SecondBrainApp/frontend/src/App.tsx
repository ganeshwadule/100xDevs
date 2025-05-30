import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import ShareDashboard from "./pages/ShareDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="share/brain/:shareLink" element = {<ShareDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
