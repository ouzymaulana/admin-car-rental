import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Mobil from "../../assets/img-BeepBeep.png";
import { MdOutlineDelete } from "react-icons/md";

const DeleteConfirmationDialog = ({ id, onDelete }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      if (!id) {
        console.error("ID is undefined");
        return;
      }
      const response = await axios.delete(
        `https://api-car-rental.binaracademy.org/admin/car/${id}`,
        {
          headers: {
            accept: "application/json",
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
          },
        }
      );
      console.log("response : ", response);
      onDelete(id);
      console.log(onDelete);
      handleClose();
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <>
      <Button
        style={{
          border: "2px solid #FA2C5A",
          borderRadius: "1px",
          padding: "8px, 12px, 8px, 12px",
          width: "100%",
          fontFamily: "arial",
          fontSize: "14",
          alignContent: "center",
        }}
        variant="outline-danger"
        onClick={handleShow}
        className="rounded-0 d-flex justify-content-center gap-1"
      >
        <MdOutlineDelete size={20} />
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ height: "333", width: "387" }}
      >
        <div style={{ padding: "32px" }}>
          <Modal.Body className=" d-flex flex-column justify-content-center align-items-center">
            <img src={Mobil} alt="Mobil" height={121} width={153} />
            Are you sure you want to delete this item?
          </Modal.Body>
          <div className=" d-flex justify-content-center gap-4">
            <Button
              variant="primary"
              onClick={handleDelete}
              style={{ backgroundColor: "#0d28a6", width: "87px" }}
              className=" rounded-0"
            >
              Ya
            </Button>
            <Button
              variant="outline-primary"
              className=" rounded-0"
              onClick={handleClose}
            >
              Tidak
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteConfirmationDialog;
