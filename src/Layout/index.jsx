import React from "react";
import Sidebar from "./SideBar/Sidebar";
import NavbarComponent from "./Navbar/Navbar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="d d-flex">
      <Sidebar />
      <NavbarComponent />
      <div
        style={{
          backgroundColor: "#F4F5F7",
          width: "100%",
          marginTop: "70px",
          marginLeft: "290px",
          height: "calc(100vh - 70px)",
          padding: "25px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
