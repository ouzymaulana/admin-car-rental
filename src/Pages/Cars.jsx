import React from "react";
import LayoutAdmin from "../Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <LayoutAdmin>
      <div>Cars Menu</div>
    </LayoutAdmin>
  );
};

export default Cars;
