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
} from "react-bootstrap";
import style from "../style/card.module.css";

const Cars = () => {
  const navigate = useNavigate();
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
      <p style={{ fontSize: "20px", fontWeight: "700" }}>Add New Car</p>
      <Button align="right" onClick={() => navigate("/cars/add-cars")}>
        + Add New Car
      </Button>
      <div>
        <Container>
          <Row>
            {data.map((item) => (
              <Card
                style={{ width: "18rem" }}
                className={style.carCard}
                key={item.id}
              >
                <Card.Body className={style.cardBody}>
                  <Card.Img src={item.image} />
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Title className={style.cardTitle}>
                    Rp {item.price} / hari
                  </Card.Title>
                  <Card.Text>{item.category}</Card.Text>
                  <Card.Subtitle>{item.description}</Card.Subtitle>
                  <Card.Subtitle>Updated at 4 Apr 2022, 09.00</Card.Subtitle>
                  <ButtonGroup className="d grid gap-8" size="sm">
                    <Button variant="outline-primary">Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </LayoutAdmin>
  );
};

export default Cars;
