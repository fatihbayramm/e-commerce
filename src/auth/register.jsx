import "../css/register.css";
import { useFormik } from "formik";
import { registerFormSchemas } from "./schemas/register-form-schemas";
import Container from "@mui/material/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/slices/auth/auth-actions";

function Register() {
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  const [confirmPasswordCheckbox, setConfirmPasswordCheckbox] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (store) => store.auth
  );

  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password1: "",
      password2: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });

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

  const handleRegister = () => {
    console.log(values);
    dispatch(register({ ...values }));
  };

  return (
    <div>
      <Header />
      {isAuthenticated ? (
        <h1>You are already registered.</h1>
      ) : (
        <Container maxWidth="xl" className="rgs-container">
          <form onSubmit={handleSubmit} className="rgs-form">
            <h1>Register</h1>
            <div className="rgs-input-box">
              <input
                type="text"
                id="rgs-firstName"
                className="rgs-input"
                name="first_name"
                placeholder="Enter Firstname"
                value={values.first_name}
                onChange={handleChange}
              />
              {errors.first_name ? (
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
                name="last_name"
                placeholder="Enter Lastname"
                value={values.last_name}
                onChange={handleChange}
              />
              {errors.last_name ? (
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
                name="password1"
                placeholder="Enter Password"
                value={values.password1}
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
              {errors.password1 ? (
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
                name="password2"
                placeholder="Enter Password Confirmation"
                value={values.password2}
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
              {errors.password2 ? (
                <div className="input-error show">{errors.confirmPassword}</div>
              ) : (
                <div className="input-error"></div>
              )}
            </div>
            <button type="submit" className="rgs-btn" onClick={handleRegister}>
              {loading ? "Registering..." : "Register"}
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
      )}

      <Footer />
    </div>
  );
}

export default Register;
