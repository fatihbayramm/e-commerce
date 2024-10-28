import "../css/address.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { useFormik } from "formik";
import { addressFormSchemas } from "./auth/schemas/address-form-schemas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCountries,
  getCities,
  getTownships,
  createAddress,
} from "../redux/slices/address/address-actions";
import AddressError from "../errors/address-error";

function Address() {
  const dispatch = useDispatch();
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      city: "",
      country: "",
      text: "",
      name: "",
      township: "",
    },
    validationSchema: addressFormSchemas,
    onSubmit: submit,
  });

  const { address, loading, error } = useSelector((store) => store.address);

  const handleCreateAddress = (values) => {
    dispatch(createAddress({ ...values }));
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCities(values.country));
    dispatch(getTownships(values.city));
  }, [dispatch, values.country, values.city]);

  return (
    <>
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
              <option className="address-choose" value="" disabled>
                Choose your country
              </option>

              {address.countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
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
              <option className="address-choose" value="" disabled>
                Choose your city
              </option>
              {address.cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
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
              <option className="address-choose" value="" disabled>
                Choose your township
              </option>

              {address.townships.map((township) => (
                <option key={township.id} value={township.id}>
                  {township.name}
                </option>
              ))}
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

          <button
            type="submit"
            className="address-save-btn"
            onClick={() => handleCreateAddress(values)}
          >
            {loading ? "Saving ..." : "Save Address"}
          </button>
        </form>
      </Container>

      {error && <AddressError error={error} />}

      <Footer />
    </>
  );
}

export default Address;
