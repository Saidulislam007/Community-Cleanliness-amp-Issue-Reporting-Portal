import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddIssue from "./pages/AddIssue";
import Garbage from "./pages/Garbage";
import IllegalConstruction from "./pages/IllegalConstruction";
import BrokenProperty from "./pages/BrokenProperty";
import RoadDamage from "./pages/RoadDamage";
import IssueDetail from "./pages/IssueDetail";
import Footer from "./components/Footer";
import RecentIssues from "./components/RecentIssues";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center mt-20">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issues/garbage" element={<Garbage />} />
          <Route path="/issues/illegal-construction" element={<IllegalConstruction />} />
          <Route path="/issues/broken-property" element={<BrokenProperty />} />
          <Route path="/issues/road-damage" element={<RoadDamage />} />
          <Route path="/issues" element={<RecentIssues />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/issues/:id" element={<IssueDetail />} />
          <Route path="/add-issue" element={
            <PrivateRoute><AddIssue /></PrivateRoute>
          } />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </AuthProvider>
    
  );
}

export default App;
