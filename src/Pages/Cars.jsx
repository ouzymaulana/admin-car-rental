import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button, ButtonGroup } from "react-bootstrap";
import style from "../style/card.module.css";
import Clock from "../assets/fi_clock.png";
import Users from "../assets/fi_users.png";
import Edits from "../assets/fi_edit.png";
import { LiaEdit } from "react-icons/lia";
import DeleteConfirmationDialog from "../Components/Crud/DeleteConfirmation";
import { useValueFilterByName } from "../Context/ValueFilterByName/ValueFilterByNameProvider";

const Cars = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { filterByName } = useValueFilterByName();
  const [filterByCategory, setFilterByCategory] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/car/",
        {
          headers: {
            accept: "application/json",
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
          },
          params: {
            name: filterByName || "",
            category: filterByCategory || "",
            page: "1",
            pageSize: "20",
          },
        }
      );
      setData(response.data.cars);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [filterByName, filterByCategory]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatUpdatedAt = (dateString) => {
    const date = new Date(dateString);
    return `${dayNames[date.getDay()]}, ${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  const handleSorting = (sortBy, order) => {
    fetchData(sortBy, order); // Mengirim permintaan ke API untuk sorting
  };
  return (
    <LayoutAdmin>
      <div className={style.directoryLabel}>
        <span>Cars {"> "}</span>
        <span>List Car</span>
      </div>
      <div className="d-flex justify-content-between">
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            fontFamily: "Arial",
            lineHeight: "30px",
          }}
        >
          List Car
        </div>

        <Button
          align="right"
          className="rounded-0"
          onClick={() => navigate("/cars/add-cars")}
          style={{ backgroundColor: "#0d28a6" }}
        >
          + Add New Car
        </Button>
      </div>
      <br />
      <div className={style.sortbutton}>
        <Button
          align="left"
          variant="outline-primary"
          onClick={() => setFilterByCategory("")}
          className="rounded-0"
          style={{
            backgroundColor: filterByCategory === "" ? "#CFD4ED" : "#ffffff",
            borderColor: filterByCategory === "" ? "#0D28A6" : "#AEB7E1",
            color: "#0D28A6",
          }}
        >
          All
        </Button>{" "}
        <Button
          align="left"
          variant="outline-primary"
          onClick={() => setFilterByCategory("small")}
          className="rounded-0"
          style={{
            backgroundColor:
              filterByCategory === "small" ? "#CFD4ED" : "#ffffff",
            borderColor: filterByCategory === "" ? "#0D28A6" : "#AEB7E1",
            color: "#0D28A6",
          }}
        >
          2 - 4 People
        </Button>{" "}
        <Button
          align="left"
          variant="outline-primary"
          onClick={() => setFilterByCategory("medium")}
          className="rounded-0"
          style={{
            backgroundColor:
              filterByCategory === "medium" ? "#CFD4ED" : "#ffffff",
            borderColor: filterByCategory === "" ? "#0D28A6" : "#AEB7E1",
            color: "#0D28A6",
          }}
        >
          4 - 6 People
        </Button>{" "}
        <Button
          align="left"
          variant="outline-primary"
          onClick={() => setFilterByCategory("large")}
          className="rounded-0"
          style={{
            backgroundColor:
              filterByCategory === "large" ? "#CFD4ED" : "#ffffff",
            borderColor: filterByCategory === "" ? "#0D28A6" : "#AEB7E1",
            color: "#0D28A6",
          }}
        >
          6 - 8 People
        </Button>{" "}
      </div>
      <div className={style.card}>
        {data.map((item) => (
          <Card
            style={{
              width: "351px",
              height: "482px",
              padding: "24px",
              // marginBottom: "20px",
            }}
            key={item.id}
          >
            {item.image ? (
              <Card.Img
                className={style.cardimg}
                variant="top"
                src={item.image}
              />
            ) : (
              <div
                style={{
                  height: "222px",
                  width: "303px",
                  borderRadius: "5px",
                  backgroundColor: "#afafaf",
                }}
              ></div>
            )}
            <Card.Body className={style.body}>
              <span className={style.name}>{item.name}</span>
              <span className={style.price}>Rp {item.price}/hari</span>
              <span className={style.category}>
                <img src={Users} alt="users" />
                {item.category === "large"
                  ? " 6 - 8 People"
                  : item.category === "medium"
                  ? " 4 - 6 People"
                  : item.category === "small"
                  ? " 2 - 4 People"
                  : null}
              </span>
              <span className={style.update}>
                <img src={Clock} alt="clock" />
                Updated At {formatUpdatedAt(item.updatedAt)}
              </span>
              <div className="d-flex flex-row gap-3">
                <DeleteConfirmationDialog>Delete</DeleteConfirmationDialog>
                <Button
                  style={{ width: "100%" }}
                  className="rounded-0 d-flex justify-content-center gap-2"
                  variant="success"
                >
                  <LiaEdit size={20} />
                  Edit
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </LayoutAdmin>
  );
};
export default Cars;
