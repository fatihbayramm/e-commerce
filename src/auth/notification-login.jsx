import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function NotificationLogin({ error }) {
  useEffect(() => {
    if (error) {
      toast.error("Login failed. Email or password is incorrect.");
    }
  }, [error]);

  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default NotificationLogin;
