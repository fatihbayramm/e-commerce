import Header from "../components/header";
import Footer from "../components/footer";
import Container from "@mui/material/Container";
import "../css/address.css";
import { useFormik } from "formik";
import { addressFormSchemas } from "./auth/schemas/address-form-schemas";

function Address() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      country: "",
      city: "",
      township: "",
      text: "",
    },
    validationSchema: addressFormSchemas,
    onSubmit: submit,
  });

  return (
    <div>
      <Header />
      <Container maxWidth="xl" className="login-container">
        <form onSubmit={handleSubmit}>
          <h1>Address Information</h1>

          <div className="address-box">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your address title"
            />
          </div>
          <div className="address-box">
            <input
              type="select"
              name="country"
              value={values.country}
              onChange={handleChange}
              placeholder="Enter which country you live in"
            />
          </div>
          <div className="address-box">
            <input
              type="select"
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="Enter which city you live in"
            />
          </div>
          <div className="address-box">
            <input
              type="select"
              name="township"
              value={values.township}
              onChange={handleChange}
              placeholder="Enter township you live i n"
            />
          </div>
          <div className="address-box">
            <input
              type="text"
              name="text"
              value={values.text}
              onChange={handleChange}
              placeholder="Enter your specific address."
            />
          </div>
        </form>
      </Container>

      <Footer />
    </div>
  );
}

export default Address;
