import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function AddressSuccess({ createdAddress }) {
  useEffect(() => {
    if (!createdAddress) return;
    toast.success("Address Created Successfully!");
  }, [createdAddress]);

  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default AddressSuccess;
