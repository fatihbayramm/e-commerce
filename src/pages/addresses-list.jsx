import "../css/address-list.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../redux/slices/address/address-actions";
import { useEffect } from "react";

function AddressList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  const { userAddresses } = useSelector((store) => store.address);

  return (
    <>
      <Header />
      <Container maxWidth="xl" className="address-list-container">
        <div className="address-list-header">
          <div>
            <h2>My Addresses</h2>
          </div>
          <div>
            <button className="add-new-address-btn">
              <div>
                <FaPlus />
              </div>
              <div> Add New Address</div>
            </button>
          </div>
        </div>
        <div className="address-list-main">
          {userAddresses.map((address) => (
            <div className="address-list-address" key={address.id}>
              <div className="address-name">{address.name}</div> <hr />
              <div className="ad">{address.text}</div>
              <div className="ad">{address.township}</div>
              <div className="ad">{address.city}</div>
              <div className="ad">{address.country}</div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AddressList;
