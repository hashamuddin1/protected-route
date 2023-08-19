import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const signOutUser = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };
  return (
    <>
      <div>Home</div>
      <button onClick={signOutUser}>Sign out</button>
    </>
  );
}
