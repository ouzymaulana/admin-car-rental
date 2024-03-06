import React from "react";
import LayoutAdmin from "../Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cars = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getDetailCar = async () => {
    const axiosConfig = {
      headers: {
        accept: "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
      },
    };
    try {
      // const response = await axios.get(
      //   `https://api-car-rental.binaracademy.org/admin/car/${id}`,
      //   axiosConfig
      // );

      // console.log("====================================");
      // console.log(response);
      // console.log("====================================");

      if (!token) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetailCar();
  }, []);

  return (
    <LayoutAdmin>
      <div>Cars Menu</div>
    </LayoutAdmin>
  );
};

export default Cars;
