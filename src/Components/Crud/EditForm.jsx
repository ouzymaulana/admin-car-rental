import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import LayoutAdmin from "../../Layout";

function EditForm({ carData, onCancel }) {
  const [car, setCar] = useState(carData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Kirim permintaan POST ke API dengan token
      await axios.post(
        "https://api-car-rental.binaracademy.org/admin/",
        car, // Mengirim data mobil yang diedit
        {
          headers: {
            accept: "application/json",
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
          },
        }
      );
      // Tambahkan logika setelah permintaan berhasil
    } catch (error) {
      console.error("Error editing car:", error);
    }
  };

  return (
    <LayoutAdmin>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nama Mobil</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama mobil"
              name="name"
              value={car.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              type="number"
              placeholder="Masukkan harga mobil"
              name="price"
              value={car.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhoto">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan URL foto mobil"
              name="photo"
              value={car.photo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={car.category}
              onChange={handleChange}
            >
              <option value="small">2 - 4</option>
              <option value="medium">4 - 6</option>
              <option value="large">6 - 8</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formCreatedAt">
            <Form.Label>Tanggal Dibuat</Form.Label>
            <Form.Control type="text" value={car.createdAt} readOnly />
          </Form.Group>
          <Form.Group controlId="formUpdatedAt">
            <Form.Label>Tanggal Diupdate</Form.Label>
            <Form.Control type="text" value={car.updatedAt} readOnly />
          </Form.Group>
          <Button variant="secondary" onClick={onCancel}>
            Batal
          </Button>{" "}
          <Button variant="primary" type="submit">
            Simpan
          </Button>
        </Form>
      </div>
    </LayoutAdmin>
  );
}

export default EditForm;
