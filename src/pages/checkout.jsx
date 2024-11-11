import "../css/checkout.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../redux/slices/address/address-actions";
import { useEffect } from "react";
import {
  getCheckout,
  setAddress,
  setShippingOption,
  setPaymentOption,
} from "../redux/slices/checkout/checkout-actions";
import { FaLocationDot } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

function Checkout() {
  const dispatch = useDispatch();
  const { userAddresses } = useSelector((store) => store.address);
  const { address, checkout, payment, shipping } = useSelector(
    (store) => store.checkout
  );

  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getCheckout());
  }, [dispatch]);

  console.log(checkout);

  const handleSelectAddress = (address) => {
    dispatch(setAddress(address));
  };

  const handleSetShippingOption = (shippingOption) => {
    dispatch(setShippingOption(shippingOption));
  };

  const handleSetPaymentOption = (paymentOption) => {
    dispatch(setPaymentOption(paymentOption));
  };
  console.log("address -->", address);
  console.log("shipping -->", shipping);
  console.log("payment -->", payment);

  return (
    <>
      <Header />
      <Container maxWidth="md" className="checkout-container">
        <div className="choose-address checkout">
          <h1 className="checkout-title">
            <div>
              <FaLocationDot />
            </div>
            <div> Shipping Address</div>
          </h1>
          <div className="address-box">
            {userAddresses && userAddresses.length > 0
              ? userAddresses.map((address) => (
                  <div className="set-address" key={address.id}>
                    <div className="set-address-radio-box">
                      <label htmlFor={`address-${address.id}`}>
                        <input
                          type="radio"
                          name="address"
                          id={`address-${address.id}`}
                          onChange={() =>
                            handleSelectAddress({ address: address.id })
                          }
                        />
                        <span> {address.name}</span>
                      </label>
                    </div>
                    <label htmlFor={`address-${address.id}`}>
                      <div className="set-address-box set">
                        <div className="set-address-name set">
                          {address.name}
                        </div>
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
                    </label>
                  </div>
                ))
              : "You do not have a registered address, create an address."}
          </div>
        </div>
        {address && address ? (
          <div className="choose-shipping checkout">
            <h1 className="checkout-title">
              <div>
                <FaShippingFast />
              </div>
              <div>Choose Shipping</div>
            </h1>
            <div className="shipping-box checkout">
              {address?.context?.shipping_options?.map((shipping) => (
                <div key={shipping.id}>
                  <label htmlFor={`shipping-${shipping.id}`}>
                    <div className="shipping-input">
                      <input
                        type="radio"
                        name="shipping"
                        id={`shipping-${shipping.id}`}
                        className="shipping-radio"
                        onChange={() =>
                          handleSetShippingOption({
                            shipping_option: shipping.id,
                          })
                        }
                      />
                      <span>
                        {" "}
                        {shipping.name} {shipping.cost}$
                      </span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {shipping && shipping ? (
          <div className="choose-payment checkout">
            <h1 className="checkout-title">
              <div>
                <MdOutlinePayment />
              </div>
              <div>Choose Payment</div>
            </h1>
            <div className="payment-box checkout">
              {shipping?.context?.payment_options?.map((payment) => (
                <div key={payment.id}>
                  <label htmlFor={`payment-${payment.id}`}>
                    <div className="payment-input">
                      <input
                        type="radio"
                        name="payment"
                        id={`payment-${payment.id}`}
                        className="payment-radio"
                        onChange={() =>
                          handleSetPaymentOption({
                            payment_option: payment.id,
                          })
                        }
                      />
                      <span> {payment.name}</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="discount-code checkout"></div>
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;
