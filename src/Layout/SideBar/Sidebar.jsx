import React from "react";
import { Nav } from "react-bootstrap";
import style from "./SideBar.module.css";

const Sidebar = () => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar fixed-top"
        style={{ width: "290px" }}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className={style.sidebarMenu}>
          <div
            style={{
              width: "70px",
              backgroundColor: "#0D28A6",
            }}
          >
            <div className={style.sidebarLogo}></div>
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
          </div>
          <div style={{ width: "100%", marginTop: "70px" }}>
            <h4>Dashboard</h4>
            <p>Dashboard</p>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Sidebar;
