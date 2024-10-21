import "../css/address.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { addressFormSchemas } from "./auth/schemas/address-form-schemas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCountries,
  getCities,
  getTownships,
} from "../redux/slices/address/address-actions";

function Address() {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCities());
    dispatch(getTownships());
  }, [dispatch]);

  const { address } = useSelector((store) => store.address);

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
            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option>Choose</option>

              {address.countries.map((country) => (
                <option key={country.id}>{country.name}</option>
              ))}
              {console.log(values.country)}
            </select>
          </div>
          <div className="address-box">
            <select name="city" value={values.city} onChange={handleChange}>
              <option>Choose</option>

              {address.cities.map((city) => (
                <option key={city.id}>{city.name}</option>
              ))}
              {console.log(values.city)}
            </select>
          </div>
          <div className="address-box">
            <select name="township" value={values.city} onChange={handleChange}>
              <option>Choose</option>

              {address.townships.map((township) => (
                <option key={township.id}>{township.name}</option>
              ))}
              {console.log(values.township)}
            </select>
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
