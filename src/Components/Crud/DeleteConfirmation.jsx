import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Mobil from "../../assets/img-BeepBeep.png";
import Trash from "../../assets/fi_trash-2.png";

const DeleteConfirmationDialog = ({ id, onDelete }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      await axios.delete("https://api-car-rental.binaracademy.org/admin/car", {
        headers: {
          accept: "application/json",
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
        },
      });
      onDelete(id); // Panggil fungsi onDelete untuk memberi tahu komponen induk bahwa item telah dihapus
      handleClose(); // Tutup dialog setelah penghapusan berhasil
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <>
      <Button
        style={{ border: "2px solid #FA2C5A", width: "100%" }}
        variant="outline-danger"
        onClick={handleShow}
      >
        <img src={Trash} alt="trash" />
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Mobil} alt="Mobil" />
          Are you sure you want to delete this item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirmationDialog;
