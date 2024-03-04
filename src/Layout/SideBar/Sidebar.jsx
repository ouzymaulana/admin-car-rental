import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import style from "./SideBar.module.css";
import { FiHome } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isCloseToggle }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light fixed-top"
        activeKey="/home"
        style={{
          width: isCloseToggle ? "70px" : "calc(70px + 220px)",
          transition: "0.5s",
        }}
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className={style.sidebarMenu}>
          <div
            className="d-flex flex-column gap-3"
            style={{
              width: "70px",
              backgroundColor: "#0D28A6",
              zIndex: "2",
            }}
          >
            <div className={style.sidebarLogo}></div>
            <Nav.Item
              onClick={() => navigate("/dashboard")}
              className={`${style.navItem} d-flex justify-content-between align-items-center justify-content-center flex-column text-white`}
            >
              <FiHome size={26} />
              <span className={style.navLink} href="/home">
                Dashboard
              </span>
            </Nav.Item>
            <Nav.Item
              onClick={() => navigate("/cars")}
              className={`${style.navItem} d-flex justify-content-between align-items-center justify-content-center flex-column text-white`}
            >
              <IoCarSportOutline size={26} />
              <span className={style.navLink} href="/home">
                Cars
              </span>
            </Nav.Item>
          </div>
          <div
            className={style.subMenu}
            style={{ marginLeft: isCloseToggle ? "-300px" : "" }}
          >
            <div className={style.subMenuHeader}>
              {pathname === "/dashboard" ? "DASHBOARD" : "CARS"}
            </div>
            <div className={style.menuItem}>
              {pathname === "/dashboard" ? "Dashboard" : "List Car"}
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Sidebar;
