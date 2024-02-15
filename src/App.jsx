import { Nav, NavDropdown, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="d d-flex">
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        style={{ width: "290px" }}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div
          className="sidebar-sticky d-flex"
          style={{
            height: "100vh",
            width: "290px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              width: "70px",
              backgroundColor: "#0D28A6",
            }}
          >
            <div
              style={{
                margin: "18px",
                width: "34px",
                height: "34px",
                backgroundColor: "#CFD4ED",
              }}
            ></div>
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
          </div>
          <div style={{ marginTop: "70px" }}>
            <h4>Dashboard</h4>
            <p>Dashboard</p>
          </div>
        </div>
      </Nav>

      <Navbar
        expand="lg"
        className="w-100 fixed-top"
        style={{ left: "70px", height: "70px", backgroundColor: "#FFFFFF" }}
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{ backgroundColor: "#F4F5F7", height: "100vh", width: "100%" }}
      >
        ouzy
      </div>
    </div>
  );
}

export default App;
