import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function NotificationRegister({ error }) {
  useEffect(() => {
    if (error) {
      toast.error("The information entered is invalid or incorrect.");
    }
  }, [error]);

  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default NotificationRegister;
