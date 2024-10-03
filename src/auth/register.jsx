import "../css/register.css";
import { useFormik } from "formik";
import { registerFormSchemas } from "./schemas/registerFormSchemas";
import Container from "@mui/material/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

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
              name="firstName"
              placeholder="Enter Firstname"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName ? (
              <div className="input-error show">{errors.firstName}</div>
            ) : (
              <div className="input-error">{errors.firstName}</div>
            )}
          </div>
          <div className="rgs-input-box">
            <input
              type="text"
              id="rgs-lastName"
              name="lastName"
              placeholder="Enter Lastname"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName ? (
              <div className="input-error show">{errors.lastName}</div>
            ) : (
              <div className="input-error">{errors.lastName}</div>
            )}
          </div>
          <div className="rgs-input-box">
            <input
              type="text"
              id="rgs-email"
              name="email"
              placeholder="Enter E-mail"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email ? (
              <div className="input-error show">{errors.email}</div>
            ) : (
              <div className="input-error">{errors.email}</div>
            )}{" "}
          </div>
          <div className="rgs-input-box">
            <input
              type="password"
              id="rgs-password"
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password ? (
              <div className="input-error show">{errors.password}</div>
            ) : (
              <div className="input-error">{errors.password}</div>
            )}
          </div>
          <div className="rgs-input-box">
            <input
              type="password"
              id="rgs-confirmPassword"
              name="confirmPassword"
              placeholder="Enter Password Confirmation"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword ? (
              <div className="input-error show">{errors.confirmPassword}</div>
            ) : (
              <div className="input-error">{errors.confirmPassword}</div>
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
