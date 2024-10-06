import "../css/login.css";
import { useFormik } from "formik";
import { loginFormSchemas } from "./schemas/login-form-schemas";
import Container from "@mui/material/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchemas,
    onSubmit: submit,
  });

  const [passwordCheckbox, setPasswordCheckbox] = useState(false);

  const handlePasswordCheckbox = () => {
    setPasswordCheckbox(!passwordCheckbox);
    if (passwordCheckbox) {
      document.querySelector("#login-password").type = "password";
    } else {
      document.querySelector("#login-password").type = "text";
    }
  };

  return (
    <div>
      <Header />
      <Container maxWidth="xl" className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Login</h1>

          <div className="login-input-box">
            <input
              type="text"
              id="login-email"
              className="login-input"
              name="email"
              placeholder="Enter E-mail"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email ? (
              <div className="input-error show">{errors.email}</div>
            ) : (
              <div className="input-error"></div>
            )}{" "}
          </div>
          <div className="login-input-box">
            <input
              type="password"
              id="login-password"
              className="login-input"
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
            />
            <div className="show-password-box">
              <input
                type="checkbox"
                id="show-password-checkbox"
                className="show-password"
                onChange={handlePasswordCheckbox}
              />

              <label
                htmlFor="show-password-checkbox"
                className="password-label"
              >
                Show Password
              </label>
            </div>
            {errors.password ? (
              <div className="input-error show">{errors.password}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="login-rgs-router">
            Do not have an account yet?{" "}
            <Link to="/register">
              {" "}
              <span>Register</span>
            </Link>
            .
          </p>
        </form>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
