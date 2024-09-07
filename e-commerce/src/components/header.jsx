import "../css/header.css";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div className="header-container">
      <div>
        <h1 className="logo">E-Commerce</h1>
      </div>
      <div className="search-box">
        <IoSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for anything"
        />
      </div>
      <div className="auth-box">
        <Button size="large" variant="contained" color="black">
          Login
        </Button>
        <Button size="large" variant="contained" color="black">
          Register
        </Button>
      </div>
    </div>
  );
}

export default Header;
