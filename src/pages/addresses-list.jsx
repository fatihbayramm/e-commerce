import "../css/address-list.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { FaPlus } from "react-icons/fa6";

function AddressList() {
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
      </Container>
      <Footer />
    </>
  );
}

export default AddressList;
