import ChartData from "../Components/Chart/ChartData";
import LayoutAdmin from "../Layout";
import ListOrderTable from "../Components/Table/ListOrderTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <LayoutAdmin>
      <div className={`list-order`}>
        <ChartData />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>Dashboard</p>
        <div className="d-flex gap-2">
          <div
            style={{ width: "4px", height: "24px", backgroundColor: "#0D28A6" }}
          ></div>
          <p>List Order</p>
        </div>
        <ListOrderTable />
      </div>
    </LayoutAdmin>
  );
};

export default Dashboard;
