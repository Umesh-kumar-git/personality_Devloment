import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Main-section/LandigPage";
import Signup from "./UserIntractpage/Signup";
import { UserAuthContextProvider } from "./context/UserAuthCountext";
import ProtectedRoute from "./ProtectedRoute";
import FreeContent from "./components/Contents/FreeContent";
import Login from "./UserIntractpage/Login";
import { ToggleContextProvider } from "./context/ToggleContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/freecontent"
            element={
              <ProtectedRoute>
                <FreeContent />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
