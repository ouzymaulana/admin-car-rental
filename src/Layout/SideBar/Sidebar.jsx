import React from "react";
import { Nav } from "react-bootstrap";
import style from "./SideBar.module.css";
import { FiHome } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";

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
            className="d-flex flex-column gap-3"
            style={{
              width: "70px",
              backgroundColor: "#0D28A6",
            }}
          >
            <div className={style.sidebarLogo}></div>
            <Nav.Item
              className={`${style.navItem} d-flex justify-content-between align-items-center justify-content-center flex-column text-white`}
            >
              <FiHome size={26} />
              <span className={style.navLink} href="/home">
                Dashboard
              </span>
            </Nav.Item>
            <Nav.Item
              className={`${style.navItem} d-flex justify-content-between align-items-center justify-content-center flex-column text-white`}
            >
              <IoCarSportOutline size={26} />
              <span className={style.navLink} href="/home">
                Cars
              </span>
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
