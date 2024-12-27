import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuctionList from "./components/Auctions/AuctionList";
import AuctionDetail from "./components/Auctions/AuctionDetail";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import './App.css';

const App = () => (
  <div className="container">
    <div className="welcome-intro">
      <h1>Welcome to the Auction Platform</h1>
      <p>Your one-stop destination for exciting auctions!</p>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<AuctionList />} />
      <Route path="/auction/:id" element={<AuctionDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
);

export default App;
