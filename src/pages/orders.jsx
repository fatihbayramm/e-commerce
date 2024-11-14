import "../css/orders.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/slices/checkout/checkout-actions";
import { useEffect } from "react";
function Orders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.checkout);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  console.log(orders);

  return (
    <>
      <Header />
      <Container maxWidth="md" className="orders-container">
        <h1>My Orders</h1>
        {orders.map((order) => (
          <div className="order" key={order.id}>
            {order.order_items.map((item) => (
              <div className="item-image" key={item.id}>
                <div>
                  <img
                    src={`/media${item.product.image}`}
                    className="order-item-image"
                    alt="Product image"
                  />
                </div>
              </div>
            ))}
            <div>
              <div className="order-total-amount">
                Total Amount: {order.total_amount}$
              </div>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Orders;
