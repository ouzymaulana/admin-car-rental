import { Col, Row } from "reactstrap";
import SignInCars from "../assets/SignInCars.png";
import SignInForm from "../Components/SignInForm/SignInForm";

function SignIn() {
  return (
    <Row className="g-0">
      <Col xs="6">
        <img style={{ height: "100vh" }} src={SignInCars} alt="Cars" />
      </Col>

      <Col xs="1" />

      <Col xs="5">
        <SignInForm />
      </Col>
    </Row>
  );
}

export default SignIn;
