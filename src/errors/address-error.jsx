import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function AdressError({ error }) {
  useEffect(() => {
    if (!error) return;
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default AdressError;
