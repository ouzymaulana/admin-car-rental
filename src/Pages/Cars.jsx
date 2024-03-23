import { Link, useNavigate } from "react-router-dom";
import LayoutAdmin from "../Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {
  Button,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardGroup,
  ButtonGroup,
} from "react-bootstrap";
import style from "../style/card.module.css";
import Clock from "../assets/fi_clock.png";
import Users from "../assets/fi_users.png";
import Edits from "../assets/fi_edit.png";
import DeleteConfirmationDialog from "../Components/Crud/DeleteConfirmation";

const Cars = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");

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
  }, []);

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

  fetchData() = [category];
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <LayoutAdmin>
      <div>Cars Menu</div>
      <div>
        {data.map((item) => (
          <ButtonGroup>
            <Button
              variant="outline-primary"
              onClick={() => handleCategoryChange("All")}
            >
              All
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleCategoryChange("small")}
            >
              2 - 4 People
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleCategoryChange("medium")}
            >
              4 - 6 People
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleCategoryChange("large")}
            >
              6 - 8 People
            </Button>
          </ButtonGroup>
        ))}
      </div>
      <div className={style.card}>
        {data.map((item) => (
          <Card
            style={{
              width: "351px",
              height: "482",
              padding: "24px",
              marginBottom: "20px",
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
                  ? "6 - 8 People"
                  : item.category === "medium"
                  ? "4 - 6 People"
                  : item.category === "small"
                  ? "2 - 4 People"
                  : null}
              </span>
              <span className={style.update}>
                <img src={Clock} alt="clock" />
                Updated At :{formatUpdatedAt(item.updatedAt)}
              </span>
              <div className="d-flex flex-row gap-4">
                <DeleteConfirmationDialog>Delete</DeleteConfirmationDialog>
                <Button style={{ width: "100%" }} variant="success">
                  <img src={Edits} alt="edit" />
                  Edit
                </Button>
              </div>
            </Card.Body>
          </Card>

          /*<Col lg={4} md={6} sm={12} className="mb-4">
                <Card
                  style={{ width: "18rem" }}
                  className="shadow-sm"
                  key={item.id}
                >
                  <Card.Body className={style.cardBody}>
                    <Card.Img src={item.image} />
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Title className={style.cardTitle}>
                      Rp {item.price} / hari
                    </Card.Title>
                    <Card.Text>
                      <img src={Users} alt="user" />
                      {item.category}
                    </Card.Text>
                    <Card.Subtitle>{item.description}</Card.Subtitle>
                    <Card.Subtitle>
                      <img src={Clock} alt="clock" />
                      Updated at 4 Apr 2022, 09.00
                    </Card.Subtitle>

                    <Container>
                      <Row>
                        <Col>
                          <DeleteConfirmationDialog>
                            Delete
                          </DeleteConfirmationDialog>
                        </Col>
                        <Col>
                          <div className="style.button">
                            <Link to={EditForm} />
                            <Button className="style.button" variant="success">
                              <img src={Edits} alt="edit" />
                              Edit
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>*/
        ))}
      </div>
    </LayoutAdmin>
  );
};

export default Cars;
/*
{
  item.category === "large"
    ? "6 - 8"
    : item.category === "medium"
    ? "4 - 6"
    : "2 - 4";
}*/
