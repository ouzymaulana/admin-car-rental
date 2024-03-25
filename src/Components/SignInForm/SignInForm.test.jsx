import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";
import SignInForm from "./SignInForm";
import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/extend-expect";

const mockAxios = new MockAdapter(axios);

describe("SignInForm", () => {
  beforeEach(() => {
    render(
      <Router>
        <SignInForm />
      </Router>
    );
  });

  it("render sign in form", async () => {
    expect(screen.getByText("Welcome, Admin BCR")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

  it("update email and password", () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "admin@bcr.io" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput.value).toBe("admin@bcr.io");
    expect(passwordInput.value).toBe("123456");
  });

  it("submits login form with correct data", async () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByText("Sign In");

    fireEvent.change(emailInput, { target: { value: "admin@bcr.io" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    mockAxios
      .onPost("https://api-car-rental.binaracademy.org/admin/auth/login")
      .reply(200, {
        data: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
        },
      });

    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(mockAxios.history.post.length).toBe();
    });

    expect(Cookies.get("token2")).toBe(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
    );
    expect(localStorage.getItem("token")).toBe(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
    );
    expect(localStorage.getItem("userEmailLogin")).toBe("admin@bcr.io");
    expect(localStorage.getItem("userRoleLogin")).toBe("admin");
    expect(window.location.pathname).toBe("/dashboard");
  });

  it("error login", async () => {
    const Button = screen.getByText("Sign In");

    mockAxios
      .onPost("https://api-car-rental.binaracademy.org/admin/auth/login")
      .reply(401);

    fireEvent.click(Button);

    await waitFor(() => {
      expect(mockAxios.history.post.length).toBe(2);
    });

    expect(
      screen.getByText(
        "Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital."
      )
    ).toBeInTheDocument();
  });
});
