import "../css/checkout.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../redux/slices/address/address-actions";
import { useEffect, useState } from "react";
import {
  getCheckout,
  setAddress,
  setShippingOption,
  setPaymentOption,
  setDiscountCode,
  completeOrder,
} from "../redux/slices/checkout/checkout-actions";
import { getBasket } from "../redux/slices/basket/basket-actions";
import { FaLocationDot } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { Link } from "react-router-dom";
import DiscountError from "../errors/discount-error";
import OrderSuccess from "../components/order-success";

function Checkout() {
  const dispatch = useDispatch();
  const { userAddresses } = useSelector((store) => store.address);
  const { address, shipping, payment, discount_code, order_number, error } =
    useSelector((store) => store.checkout);
  const { basket } = useSelector((store) => store.basket);

  const [discount, setDiscount] = useState("");

  const [displayAmount, setDisplayAmount] = useState(
    payment?.pre_order?.net_amount
  );

  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getCheckout());
    dispatch(getBasket());
  }, [dispatch]);

  useEffect(() => {
    if (discount_code?.pre_order?.net_amount) {
      setDisplayAmount(discount_code.pre_order.net_amount);
    } else {
      setDisplayAmount(payment?.pre_order?.net_amount);
    }
  }, [discount_code, payment]);

  const handleSelectAddress = (address) => {
    dispatch(setAddress(address));
  };

  const handleSetShippingOption = (shippingOption) => {
    dispatch(setShippingOption(shippingOption));
  };

  const handleSetPaymentOption = (paymentOption) => {
    dispatch(setPaymentOption(paymentOption));
  };

  const handleDiscountCode = () => {
    dispatch(setDiscountCode({ discount_code: discount }));
  };

  const handleCompleteOrder = () => {
    if (!error) {
      dispatch(completeOrder());
    }
  };

  console.log("payment-->", payment);
  console.log("discount-->", discount_code);
  console.log(order_number);

  return (
    <>
      <Header />
      <Container maxWidth="md" className="checkout-container">
        {order_number ? (
          <OrderSuccess />
        ) : (
          <div>
            <h1 className="checkout-title">
              <div>
                <FaShoppingBasket />
              </div>
              <div> My Basket</div>
            </h1>
            <div className="chk-basket">
              {basket && basket.basket_items && basket.basket_items.length > 0
                ? basket?.basket_items?.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product-detail/${item.product.id}`}
                      className="chk-product-router"
                    >
                      <div className="chk-basket-item">
                        <div className="chk-product-image">
                          <img
                            src={`/media${item.product.image}`}
                            alt="Product image"
                          />
                        </div>
                        <div className="chk-product-info-box">
                          <div className="chk-product-name">
                            <div>{item.product.name}</div>
                            <div className="chk-product-sku">
                              {item.product.sku}
                            </div>
                          </div>
                          <div className="chk-product-price">
                            {item.product.price}$
                          </div>
                          <div className="chk-product-quantity">
                            Quantity: {item.quantity}
                          </div>

                          <div className="chk-product-total-price">
                            {item.quantity} x{" "}
                            <span className="chk-product-price">
                              {item.product.price}$
                            </span>{" "}
                            = {item.amount}$
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                : ""}
            </div>
            <div className="choose-address checkout">
              <h1 className="checkout-title">
                <div>
                  <FaLocationDot />
                </div>
                <div> Shipping Address</div>
              </h1>
              <div className="chk-address-box">
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
            {address?.context?.shipping_options &&
            address?.context?.shipping_options ? (
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
            {shipping?.context?.payment_options &&
            shipping?.context?.payment_options ? (
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
            <div className="discount-code checkout">
              <h1 className="checkout-title">
                <div>
                  <MdOutlineDiscount />
                </div>
                <div>Discount Code</div>
              </h1>
              <div className="chk-discount">
                <input
                  type="text"
                  className="discount-code-input"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <DiscountError error={error} />
                <button
                  className="discount-code-btn"
                  type="submit"
                  onClick={handleDiscountCode}
                >
                  Enter code
                </button>
              </div>
            </div>
            {payment?.pre_order?.net_amount ? (
              <div className="chk-basket-total-amount">
                <span className="chk-total-amount">
                  Total Amount: {displayAmount}$
                </span>{" "}
              </div>
            ) : (
              ""
            )}
            <div className="chk-pay">
              <button
                className="chk-pay-btn"
                type="submit"
                onClick={handleCompleteOrder}
              >
                Pay
              </button>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;
