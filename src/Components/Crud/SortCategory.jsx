import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";

const SortButtons = () => {
  const [sortedData, setSortedData] = useState([]);

  const handleShow = () => setSortedData(true);

  const fetchData = async (category) => {
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
      setSortedData(response.data);
    } catch (error) {
      console.error("Error fetching sorted data: ", error);
    }
  };

  return (
    <ButtonGroup>
      {item.category === "large"
        ? "6 - 8 People"
        : item.category === "medium"
        ? "4 - 6 People"
        : item.category === "small"
        ? "2 - 4 People"
        : null}
      <Button variant="secondary" onClick={(handleShow) => fetchData("all")}>
        {" "}
        All
      </Button>
      <Button variant="secondary" onClick={(handleShow) => fetchData("small")}>
        2 - 4 People
      </Button>
      <Button variant="secondary" onClick={(handleShow) => fetchData("medium")}>
        4 - 6 People
      </Button>
      <Button variant="secondary" onClick={(handleShow) => fetchData("large")}>
        6 - 8 People
      </Button>
    </ButtonGroup>
  );
};

export default SortCategory;
