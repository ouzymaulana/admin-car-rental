import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import LayoutAdmin from "../../Layout";

const EditForm = ({ id, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    category: "",
    price: "",
    updatedDate: "",
    createdDate: "",
  });

  useEffect(() => {
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
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleSave = async () => {
    try {
      await axios.post(
        "https://api-car-rental.binaracademy.org/admin/car",
        {
          headers: {
            accept: "application/json",
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
          },
        },
        formData
      );
      onSave();
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  return (
    <LayoutAdmin>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhoto">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUpdatedDate">
          <Form.Label>Updated Date</Form.Label>
          <Form.Control
            type="text"
            name="updatedDate"
            value={formData.updatedDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCreatedDate">
          <Form.Label>Created Date</Form.Label>
          <Form.Control
            type="text"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>{" "}
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </LayoutAdmin>
  );
};

export default EditForm;
