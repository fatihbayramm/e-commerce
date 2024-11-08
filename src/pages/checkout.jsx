import "../css/checkout.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../redux/slices/address/address-actions";
import { useEffect } from "react";
import { setAddress } from "../redux/slices/checkout/checkout-actions";

function Checkout() {
  const dispatch = useDispatch();
  const { userAddresses } = useSelector((store) => store.address);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  const handleSelectAddress = (address) => {
    dispatch(setAddress(address));
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
                    <div className="set-address-name set">{address.name}</div>{" "}
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
        <div className="choose-payment"></div>
        <div className="choose-shipping"></div>
        <div className="discount-code"></div>
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;
