import "../css/address-list.css";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddresses,
  deleteAddress,
} from "../redux/slices/address/address-actions";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

function AddressList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  const { userAddresses } = useSelector((store) => store.address);

  const handleDeleteAddress = async (addressId) => {
    await dispatch(deleteAddress(addressId));
    dispatch(getAddresses());
  };

  const handleUpdateAddress = (addressId, addressData) => {
    navigate(`/address/${addressId}`, {
      state: {
        id: addressId,
        data: addressData,
      },
    });
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl" className="address-list-container">
        <div className="address-list-header">
          <div>
            <h2>My Addresses</h2>
          </div>
          <div>
            <Link to="/address" className="add-new-address-router">
              <button className="add-new-address-btn">
                <div>
                  <FaPlus />
                </div>
                <div> Add New Address</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="address-list-main">
          {userAddresses && userAddresses.length > 0 ? (
            userAddresses.map((address) => (
              <div className="address-list-address" key={address.id}>
                <div className="address-name">{address.name}</div> <hr />
                <div className="ad">{address.text}</div>
                <div className="ad">
                  {address.township} (No data from backend)
                </div>
                <div className="ad">{address.city} (No data from backend)</div>
                <div className="ad">
                  {address.country} (No data from backend)
                </div>
                <div className="address-delete-edit-box">
                  <div
                    className="address-delete-box"
                    onClick={() => handleDeleteAddress(address.id)}
                  >
                    <div>
                      <MdDelete size={20} />
                    </div>
                    <div className="address-delete">Delete</div>
                  </div>

                  <div
                    className="address-edit-box"
                    onClick={() =>
                      handleUpdateAddress(address.id, {
                        name: address.name,
                        country: address.country,
                        city: address.city,
                        township: address.township,
                        text: address.text,
                      })
                    }
                  >
                    <div>
                      <MdEditSquare size={20} />
                    </div>
                    <div className="address-edit">Edit</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>You do not have a registered address yet</div>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AddressList;
