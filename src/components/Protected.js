import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  console.log("protected");
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log(login);
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}
