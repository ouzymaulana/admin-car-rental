import { useEffect, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import LayoutAdmin from "../../Layout";
import axios from "axios";
import style from "./style.module.css";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useAlertAfterExecute } from "../../Context/AlertAfterExecute/AlertAfterExecuteContextProvider";

const EditCars = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  // Files
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [fileName, setFileName] = useState("");
  const [harga, setHarga] = useState("");
  const [category, setCategory] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { setAlertExecute } = useAlertAfterExecute();

  // Data Fetch from Cars Hit
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-car-rental.binaracademy.org/admin/car/${id}`,
          {
            headers: {
              access_token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
            },
          }
        );
        const carData = response.data;
        setName(carData.name);
        setHarga(carData.price);
        setCategory(carData.category);
        setFileName(carData.image);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, [id]);

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
    } else if (file[0] && file[0].size > 2 * 1024 * 1024) {
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
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", harga);
      formData.append("status", "true");
      formData.append("image", file);
      // Edit API
      const response = await axios.put(
        `https://api-car-rental.binaracademy.org/admin/car/${id}`,
        formData,
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
        }
      );

      if (response.status === 200) {
        setShowAlert(true);
        setFile("");
        setCategory("");
        setHarga("");
        setName("");
        setFileName("");
        setIsInputError({
          name: "",
          harga: "",
          file: "",
          category: "",
        });
        setAlertExecute({
          status: true,
          label: "edit",
          message: "Data Berhasil di Edit",
        });
        navigate("/cars", { state: { editSuccess: true } });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  };

  return (
    <LayoutAdmin>
      <div className={style.directoryLabel}>
        <span>
          Cars {">"} List Car {"> "}
        </span>
        <span>Edit Car</span>
      </div>

      <p style={{ fontSize: "20px", fontWeight: "700" }}>Edit Car</p>

      <div className={style.formAddData}>
        {showAlert && (
          <Alert
            variant={"success"}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <strong>Data Berhasil Disimpan</strong>
          </Alert>
        )}
        {/* Form */}
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
                as="div"
                className={style.formControl}
                onClick={() => fileInputRef.current.click()}
              >
                {fileName ? (
                  <span>{fileName}</span>
                ) : (
                  <span style={{ color: "#afafaf" }}>Upload Foto Mobil</span>
                )}
              </Form.Control>
              <div style={{ position: "relative" }}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className={style.formControl}
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
                <MdOutlineFileUpload
                  size={20}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "-25px",
                    color: "#afafaf",
                  }}
                />
              </div>
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
                value={category}
              >
                <option
                  value={""}
                  className={style.placeholderOption}
                  disabled
                  hidden
                >
                  Pilih Kategori Mobil
                </option>
                <option value="large">6 - 8</option>
                <option value="medium">4 - 6</option>
                <option value="small">2 - 4</option>
              </Form.Select>
              {isInputError.category && (
                <small style={{ color: "red" }}>{isInputError.category}</small>
              )}
            </div>
          </Form.Group>
        </Form>
      </div>

      {/* Button */}
      <div className={style.buttonActionForm}>
        <Button
          variant="outline-primary"
          className={style.buttonCancel}
          onClick={() => navigate("/cars")}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="primary"
          type="submit"
          className={style.buttonSubmit}
        >
          Save
        </Button>
      </div>
    </LayoutAdmin>
  );
};

export default EditCars;
