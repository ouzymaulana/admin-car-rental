import React, { useState } from "react";
import Sidebar from "./SideBar/Sidebar";
import NavbarComponent from "./Navbar/Navbar";

const LayoutAdmin = ({ children }) => {
  const [isCloseToggle, setIsCloseTogel] = useState(false);
  return (
    <div className="d d-flex">
      <Sidebar isCloseToggle={isCloseToggle} />
      <NavbarComponent
        setIsCloseTogel={setIsCloseTogel}
        isCloseToggle={isCloseToggle}
      />
      <div
        style={{
          overflow: "auto",
          backgroundColor: "#F4F5F7",
          width: "100%",
          marginTop: "70px",
          marginLeft: isCloseToggle ? "70px" : "290px",
          height: "calc(100vh - 70px)",
          padding: "25px",
          transition: "0.5s",
          fontFamily: "Arial",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
