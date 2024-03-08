import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Logo from "../../assets/Logo.png";
import style from "./SignInForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("https://api-car-rental.binaracademy.org/admin/auth/login", data)
      .then((result) => {
        if (result) {
          Cookies.set("token2", result.data.access_token, { expires: 1 / 24 });
          localStorage.setItem("token", result.data.access_token);
          localStorage.setItem("userEmailLogin", result.data.email);
          localStorage.setItem("userRoleLogin", result.data.role);
          navigate(`/dashboard`, { replace: true });
        }
      })
      .catch((e) => {
        setError(
          "Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital."
        );
      });
  };

  return (
    <>
      <Container className={style.BG}>
        <div className={style.content}>
          <img src={Logo} alt="logo" className={style.logo} />
          <h3 style={{ marginBottom: 25 }}>Welcome, Admin BCR</h3>

          <div>
            {error && (
              <Alert className={style.alertcustom} color="danger">
                <p>{error}</p>
              </Alert>
            )}
          </div>

          <Form>
            <FormGroup>
              <Label for="email">
                <strong>Email</strong>
              </Label>

              <Input
                id="email"
                name="email"
                placeholder="Contoh: johndee@gmail.com"
                type="email"
                value={email}
                onChange={onChangeEmail}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                <strong>Password</strong>
              </Label>

              <Input
                id="password"
                name="password"
                placeholder="6+ karakter"
                type="password"
                style={{ marginBottom: 35 }}
                value={password}
                onChange={onChangePassword}
                required
              />
            </FormGroup>
            <Button
              className={style.submitbutton}
              onClick={submitLogin}
              style={{ marginBottom: 25 }}
            >
              Sign In
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default SignInForm;
