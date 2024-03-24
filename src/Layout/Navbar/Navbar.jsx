import React, { useEffect, useState } from "react";
import { Button, NavDropdown, Navbar } from "react-bootstrap";
import style from "./Navbar.module.css";
import { TfiMenu } from "react-icons/tfi";
import { Input } from "reactstrap";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useValueFilterByName } from "../../Context/ValueFilterByName/ValueFilterByNameProvider";

const NavbarComponent = ({ setIsCloseTogel, isCloseToggle }) => {
  const { filterByName, setFilterByName } = useValueFilterByName();
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmailLogin");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  function stringAvatar(name) {
    const nameArray = name.split(" ");
    if (nameArray.length >= 2) {
      return {
        children: `${nameArray[0][0]}${nameArray[1][0]}`,
      };
    } else if (nameArray.length === 1) {
      return {
        children: `${nameArray[0][0]}`,
      };
    } else {
      return {
        children: "",
      };
    }
  }

  const handleSubmitFilter = () => {
    setFilterByName(filter);
  };

  const handleOnchangeFilter = (e) => {
    setFilter(e.target.value);
  };

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
            <Input
              placeholder="Search"
              value={filter}
              onChange={handleOnchangeFilter}
              className={style.inputField}
            />
          </div>
          <Button
            onClick={handleSubmitFilter}
            variant="outline"
            className="d-flex justify-content-center align-items-center rounded-0"
          >
            Search
          </Button>
        </div>
        <div
          className={`d-flex justify-content-center align-items-center ${style.profile}`}
        >
          <div className={style.profileName}>
            {stringAvatar(userEmail).children.toUpperCase()}
          </div>
          <NavDropdown title={userEmail} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={handleLogout} href="#action/3.1">
              LogOut
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
