import "../css/header.css";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

function Header() {
  // TODO: login ve register butonlari dropdown olacak. yaninda sepet iconu ve bildirim iconu olacak.
  // TODO: logo duzeltilecek.
  return (
    <div className="header-container">
      <header>
        {" "}
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
      </header>
    </div>
  );
}

export default Header;
