import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function BasketError({ error, basket }) {
  useEffect(() => {
    if (!basket) return;
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

export default BasketError;
