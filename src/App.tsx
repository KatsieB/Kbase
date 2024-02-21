import { Route, Routes } from "react-router-dom";
import LandingContainer from "./components/LandingContainer";
import HomePage from "./components/HomePage";
import AuthContext from "./contexts/AuthContext";

export default function App() {
  return (
    <div>
      <h1> HI OLIVIA</h1>
      <h2> yo ho yo ho a pirate's life for me</h2>
      <Routes>
        <Route
          path="/"
          element={
            <AuthContext>
              <HomePage />
            </AuthContext>
          }
        />
        <Route path="/" element={<LandingContainer />} />
      </Routes>
    </div>
  );
}
