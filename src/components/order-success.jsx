import "../css/order-success.css";
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function OrderSuccess() {
  const { order_number } = useSelector((store) => store.checkout);
  return (
    <>
      <div className="os-box">
        <div>
          <div>
            <FaCircleCheck className="os-check-icon" size={60} />
          </div>
          <div> Your order has been successfully created.</div>
        </div>
        <p className="os-order-number">
          Order Number: {order_number.order_number}
        </p>
        <div className="os-router-box">
          <span>
            <Link to="/orders" className="os-router">
              Go to My Orders.
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default OrderSuccess;
