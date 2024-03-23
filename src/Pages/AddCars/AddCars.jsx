import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import LayoutAdmin from "../../Layout";
import axios from "axios";
import style from "./style.module.css";

const AddCars = () => {
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [harga, setHarga] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [isInputError, setIsInputError] = useState({
    name: "",
    harga: "",
    file: "",
    category: "",
  });

  const handleSubmit = async () => {
    // Reset isInputError
    setIsInputError({});

    // Validasi input
    let isError = false;
    if (!name) {
      setIsInputError((prevState) => ({
        ...prevState,
        name: "Nama/Tipe Mobil harus diisi",
      }));
      isError = true;
    }
    if (!harga) {
      setIsInputError((prevState) => ({
        ...prevState,
        harga: "Harga harus diisi",
      }));
      isError = true;
    }
    if (file.length === 0) {
      setIsInputError((prevState) => ({
        ...prevState,
        file: "File harus diunggah",
      }));
      isError = true;
    } else if (file[0].size > 2 * 1024 * 1024) {
      // Ukuran file lebih dari 2MB
      setIsInputError((prevState) => ({
        ...prevState,
        file: "Ukuran file harus kurang dari 2MB",
      }));
      isError = true;
    }
    if (!category) {
      setIsInputError((prevState) => ({
        ...prevState,
        category: "Category harus diisi",
      }));
      isError = true;
    }

    if (isError) {
      // Jika terjadi kesalahan, hentikan proses submit
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", harga);
      formData.append("status", "true");
      formData.append("image", file[0]);
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/admin/car",
        formData,
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
        }
      );

      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    console.log("====================================");
    console.log("name : ", name);
    console.log("file : ", file);
    console.log("harga : ", harga);
    console.log("category : ", category);
    console.log("====================================");
  }, [name, file, harga, category]);

  return (
    <LayoutAdmin>
      <p style={{ fontSize: "20px", fontWeight: "700" }}>Add New Car</p>
      <div className={style.formAddData}>
        <Form style={{ width: "40rem" }}>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Label>
              Nama/Tipe Mobil<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div className={style.inputForm}>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={style.formControl}
                type="text"
                placeholder="Input Nama/Tipe Mobil"
              />
              {isInputError.name && (
                <small style={{ color: "red" }}>{isInputError.name}</small>
              )}
            </div>
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Label>
              Harga<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div className={style.inputForm}>
              <Form.Control
                type="text"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className={style.formControl}
                placeholder="Input Harga Sewa Mobil"
              />
              {isInputError.harga && (
                <small style={{ color: "red" }}>{isInputError.harga}</small>
              )}
            </div>
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Label>
              Foto<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div className={style.inputForm}>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files)}
                className={style.formControl}
                placeholder="Upload Foto Mobil"
                accept="image/png, image/jpeg"
              />
              <div className="d-flex gap-1 flex-wrap">
                <small style={{ color: "#afafaf" }}>File Size Max. 2MB</small>
                {isInputError.file && (
                  <small style={{ color: "red" }}>{isInputError.file}</small>
                )}
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Label>
              Kategori<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div className={style.inputForm}>
              <Form.Select
                onChange={(e) => setCategory(e.target.value)}
                className={style.formControl}
                placeholder="Kategori"
              >
                <option>Open this select menu</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </Form.Select>
              {isInputError.category && (
                <small style={{ color: "red" }}>{isInputError.category}</small>
              )}
            </div>
          </Form.Group>
        </Form>
      </div>
      <div className={style.buttonActionForm}>
        <Button variant="outline-primary" className={style.buttonCancel}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="primary"
          type="submit"
          className={style.buttonSubmit}
        >
          Submit
        </Button>
      </div>
    </LayoutAdmin>
  );
};

export default AddCars;
