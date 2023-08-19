import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const loginUser = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log("redirect to login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <div>Login</div>
      <button onClick={loginUser}>Login</button>
    </>
  );
}
