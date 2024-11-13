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
      <Container maxWidth="xl" className="orders-container"></Container>
      <Footer />
    </>
  );
}

export default Orders;
