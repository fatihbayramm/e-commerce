import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

function LoadingBasket() {
  const { loading } = useSelector((store) => store.basket);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      {console.log("loading calisiyor...")}
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingBasket;
