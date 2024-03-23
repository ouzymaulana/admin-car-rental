import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {
  Button,
  ButtonGroup,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardGroup,
} from "react-bootstrap";
import style from "../style/card.module.css";
import Clock from "../assets/fi_clock.png";
import Trash from "../assets/fi_trash-2.png";
import Users from "../assets/fi_users.png";
import Edits from "../assets/fi_edit.png";

const Cars = () => {
  const [data, setData] = useState([]);

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

  return (
    <LayoutAdmin>
      <div>Cars Menu</div>
      <div className={style.Card}>
        <Container className={style.Container}>
          <Row id="card-car">
            {data.map((item) => (
              <Col lg={4} md={6} sm={12} className="mb-4">
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
                    <Button className="style.button" variant="success">
                      <img src={Edits} alt="edit" /> Edit
                    </Button>
                    <Button className="style.button" variant="outline-danger">
                      <img src={Trash} alt="trash" />
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </LayoutAdmin>
  );
};

export default Cars;
