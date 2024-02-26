import React from "react";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import style from "./Navbar.module.css";
import { TfiMenu } from "react-icons/tfi";
import { Input } from "reactstrap";
import { BiSearch } from "react-icons/bi";
// import jwt from "jsonwebtoken";

const NavbarComponent = ({ setIsCloseTogel, isCloseToggle }) => {
  const data = localStorage.getItem("token");

  // const decodedData = jwt.decode(data);
  return (
    <Navbar expand="lg" className={`fixed-top ${style.navbarNav}`}>
      <Navbar.Brand href="#home" className={style.navbarBrand}></Navbar.Brand>
      <div>
        <TfiMenu
          size={"1.4em"}
          style={{ cursor: "pointer" }}
          onClick={() => setIsCloseTogel(!isCloseToggle)}
        />
      </div>
      <div className="d-flex justify-content-end w-100">
        <div className={style.inputSerach}>
          <div className={`position-relative`}>
            <BiSearch
              size={"1.4em"}
              className={`position-absolute ${style.iconSearch}`}
            />
            <Input placeholder="Search" className={style.inputField} />
          </div>
          <Button
            variant="outline"
            className="d-flex justify-content-center align-items-center rounded-0"
          >
            Search
          </Button>
        </div>
        <div
          className={`d-flex justify-content-center align-items-center ${style.profile}`}
        >
          <div className={style.profileName}>U</div>
          <NavDropdown title="Ouzy Maulana" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">LogOut</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
