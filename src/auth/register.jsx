import "../css/register.css";
import { useFormik } from "formik";
import { registerFormSchemas } from "./schemas/registerFormSchemas";
import Container from "@mui/material/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });

  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  const [confirmPasswordCheckbox, setConfirmPasswordCheckbox] = useState(false);

  const handlePasswordCheckbox = () => {
    setPasswordCheckbox(!passwordCheckbox);
    if (passwordCheckbox) {
      document.querySelector("#rgs-password").type = "password";
    } else {
      document.querySelector("#rgs-password").type = "text";
    }
  };

  const handleConfirmPasswordCheckbox = () => {
    setConfirmPasswordCheckbox(!confirmPasswordCheckbox);
    if (confirmPasswordCheckbox) {
      document.querySelector("#rgs-confirmPassword").type = "password";
    } else {
      document.querySelector("#rgs-confirmPassword").type = "text";
    }
  };
  return (
    <div>
      <Header />
      <Container maxWidth="xl" className="rgs-container">
        <form onSubmit={handleSubmit} className="rgs-form">
          <h1>Register</h1>
          <div className="rgs-input-box">
            <input
              type="text"
              id="rgs-firstName"
              className="rgs-input"
              name="firstName"
              placeholder="Enter Firstname"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName ? (
              <div className="input-error show">{errors.firstName}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>
          <div className="rgs-input-box">
            <input
              type="text"
              id="rgs-lastName"
              className="rgs-input"
              name="lastName"
              placeholder="Enter Lastname"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName ? (
              <div className="input-error show">{errors.lastName}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>
          <div className="rgs-input-box">
            <input
              type="text"
              id="rgs-email"
              className="rgs-input"
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
          <div className="rgs-input-box">
            <input
              type="password"
              id="rgs-password"
              className="rgs-input"
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
          <div className="rgs-input-box">
            <input
              type="password"
              id="rgs-confirmPassword"
              className="rgs-input"
              name="confirmPassword"
              placeholder="Enter Password Confirmation"
              value={values.confirmPassword}
              onChange={handleChange}
            />

            <div className="show-password-box">
              <input
                type="checkbox"
                id="show-confirmPassword-checkbox"
                className="show-password"
                onChange={handleConfirmPasswordCheckbox}
              />

              <label
                htmlFor="show-confirmPassword-checkbox"
                className="password-label"
              >
                Show Password
              </label>
            </div>
            {errors.confirmPassword ? (
              <div className="input-error show">{errors.confirmPassword}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>
          <button type="submit" className="rgs-btn">
            Register
          </button>
          <p className="rgs-login-router">
            Already have an account? Then{" "}
            <Link to="/login">
              {" "}
              <span>login</span>
            </Link>
            .
          </p>
        </form>
      </Container>
      <Footer />
    </div>
  );
}

export default Register;
