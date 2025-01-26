import React, { useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AuctionList from "./components/Auctions/AuctionList";
import AuctionDetail from "./components/Auctions/AuctionDetail";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RoleSelection from "./components/RoleSelection";
import UserDashboard from "./components/Dashboard/UserDashboard";
import SellerDashboard from "./components/Dashboard/SellerDashboard";
import { AuthContext } from "./AuthContext";
import "./App.css";

const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={isAuthenticated ? "full-screen" : "container"}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AuctionList />} />
        <Route path="/auction/:id" element={<AuctionDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
