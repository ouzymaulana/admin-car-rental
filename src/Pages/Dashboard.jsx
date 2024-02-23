import React from "react";
import LayoutAdmin from "../Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate("/", { replace: true });
        }
    }, []);
  
  return (
    <LayoutAdmin>
      <div>Ouzy Binar Academy</div>
    </LayoutAdmin>
  );
};

export default Dashboard;
