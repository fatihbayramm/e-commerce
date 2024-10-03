import { act } from "react";
import "../css/register.css";
import { useFormik } from "formik";
import { registerFormSchemas } from "./schemas/registerFormSchemas";

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
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="rgs-input-box">
          <label>Firstname</label>
          <input type="text" id="rgs-firstName" placeholder="Enter Firstname" />
        </div>
        <div className="rgs-input-box">
          <label>Lastname</label>
          <input type="text" id="rgs-lastName" placeholder="Enter Lastname" />
        </div>
        <div className="rgs-input-box">
          <label>E-mail</label>
          <input type="text" id="rgs-email" placeholder="Enter E-mail" />
        </div>
        <div className="rgs-input-box">
          <label>Password</label>
          <input
            type="password"
            id="rgs-password"
            placeholder="Enter Password"
          />
        </div>
        <div className="rgs-input-box">
          <label>Confirm Password</label>
          <input
            type="password"
            id="rgs-confirmPassword"
            placeholder="Enter Password Confirmation"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
