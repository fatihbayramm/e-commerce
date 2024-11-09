import "../css/checkout.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAddresses } from "../redux/slices/address/address-actions";
import { useEffect } from "react";
import {
  getCheckout,
  setAddress,
  setShippingOption,
} from "../redux/slices/checkout/checkout-actions";

function Checkout() {
  const dispatch = useDispatch();
  const { userAddresses } = useSelector((store) => store.address);
  const { checkout } = useSelector((store) => store.checkout);

  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getCheckout());
  }, [dispatch]);

  console.log(checkout);

  const handleSelectAddress = (address) => {
    dispatch(setAddress(address));
  };

  const handleChange = async (event) => {
    await dispatch(setShippingOption({ shipping_option: event.target.value }));
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl" className="checkout-container">
        <div className="set-address-container">
          <h1>Shipping Address</h1>
          {userAddresses && userAddresses.length > 0
            ? userAddresses.map((address) => (
                <div className="set-address" key={address.id}>
                  <div className="set-address-radio-box">
                    <label htmlFor={`set-current-address-${address.id}`}>
                      <input
                        type="radio"
                        name="set-current-address"
                        id={`set-current-address-${address.id}`}
                        onChange={() =>
                          handleSelectAddress({ address: address.id })
                        }
                      />
                      {address.name}
                    </label>
                  </div>

                  <div className="set-address-box set">
                    <div className="set-address-name set">{address.name}</div>
                    <hr />
                    <div className="set">{address.text}</div>
                    <div className="set">
                      {address.township} (No data from backend)
                    </div>
                    <div className="set">
                      {address.city} (No data from backend)
                    </div>
                    <div className="set">
                      {address.country} (No data from backend)
                    </div>
                  </div>
                </div>
              ))
            : "You do not have a registered address, create an address."}
        </div>
        <div className="set-payment-container">
          <h1>Payment</h1>
        </div>
        <div className="choose-shipping">
          <h1>Choose Shipping</h1>
          <select name="shipping" id="shipping" onChange={handleChange}>
            <option value="">Choose Shipping</option>

            {checkout?.context?.shipping_options?.map((shipping) => (
              <option value={shipping.id} key={shipping.id}>
                {shipping.name}
              </option>
            ))}
          </select>
        </div>
        <div className="discount-code"></div>
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;
