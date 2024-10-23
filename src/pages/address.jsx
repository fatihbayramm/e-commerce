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

  const { address, loading } = useSelector((store) => store.address);

  return (
    <div>
      <Header />
      <Container maxWidth="xl" className="address-container">
        <form onSubmit={handleSubmit} className="address-form">
          <h1>Address Information</h1>

          <div className="address-box">
            <input
              type="text"
              name="name"
              className="address-input"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your address title"
            />
            {errors.name ? (
              <div className="input-error show">{errors.name}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>
          <div className="address-box">
            <select
              name="country"
              className="address-select"
              value={values.country}
              onChange={handleChange}
            >
              <option className="address-choose">Choose</option>

              {address.countries.map((country) => (
                <option key={country.id}>{country.name}</option>
              ))}
              {console.log(values.country)}
            </select>
            {errors.country ? (
              <div className="input-error show">{errors.country}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>
          <div className="address-box">
            <select
              name="city"
              className="address-select"
              value={values.city}
              onChange={handleChange}
            >
              <option className="address-choose">Choose</option>

              {address.cities.map((city) => (
                <option key={city.id}>{city.name}</option>
              ))}
              {console.log(values.city)}
            </select>
            {errors.city ? (
              <div className="input-error show">{errors.city}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>
          <div className="address-box">
            <select
              name="township"
              className="address-select"
              value={values.township}
              onChange={handleChange}
            >
              <option className="address-choose">Choose</option>

              {address.townships.map((township) => (
                <option key={township.id}>{township.name}</option>
              ))}
              {console.log(values.township)}
            </select>
            {errors.township ? (
              <div className="input-error show">{errors.township}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>
          <div className="address-box">
            <input
              type="text"
              name="text"
              className="address-input"
              value={values.text}
              onChange={handleChange}
              placeholder="Enter your specific address."
            />
            {errors.text ? (
              <div className="input-error show">{errors.text}</div>
            ) : (
              <div className="input-error"></div>
            )}
          </div>

          <button className="address-save-btn">
            {loading ? "Saving ..." : "Save Address"}
          </button>
        </form>
      </Container>

      <Footer />
    </div>
  );
}

export default Address;
