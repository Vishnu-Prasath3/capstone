import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "buyer") {
      navigate("/user-dashboard"); // Redirect to User Dashboard
    } else if (role === "seller") {
      navigate("/seller-dashboard"); // Redirect to Seller Dashboard
    }
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <button onClick={() => handleRoleSelection("buyer")}>I am a Buyer</button>
      <button onClick={() => handleRoleSelection("seller")}>I am a Seller</button>
    </div>
  );
};

export default RoleSelection; 