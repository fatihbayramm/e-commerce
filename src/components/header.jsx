import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/slices/product/product-slice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../css/header.css";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import $U from "../config/urls";
import { logoutUser } from "../redux/slices/auth/auth-actions";
import Cookies from "js-cookie";
import { FaShoppingBasket } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import { getBasket } from "../redux/slices/basket/basket-slice";
import { removeProductFromBasket } from "../redux/slices/basket/basket-slice";
import { updateProductInBasket } from "../redux/slices/basket/basket-slice";
import { IoMdClose } from "react-icons/io";

// TODO: header mobile modda duzgun gozukmuyor.
// TODO: filterlar activate oldugu durumda logoya basinca filterlarin gitmesi lazim ancak gitmiyor ama searchParams degisiyor coz.
// TODO: Safari de detay sayfasi kaymis ona da bi bak.

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "20px",
    [theme.breakpoints.up("md")]: {
      width: "75ch",
    },
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const { basket } = useSelector((store) => store.basket);

  const token = Cookies.get("authToken");

  const handleBasketDrawer = () => {
    setIsBasketOpen(true);
    dispatch(getBasket({ token }));
  };

  const [basketQuantity, setBasketQuantity] = useState(0);

  const handleBasketQuantityMinusBtn = (id, quantity) => {};

  const handleBasketQuantityPlusBtn = () => {};

  const deleteProductFromBasket = (productId) => {
    dispatch(removeProductFromBasket({ productId }));
  };

  const basketDrawer = (
    <Drawer
      open={isBasketOpen}
      onClose={() => setIsBasketOpen(false)}
      anchor="right"
    >
      <Box sx={{ width: "400px", textAlign: "center" }}>
        <h1 className="basket-title">My Basket</h1>
        <div>
          {basket && basket.basket_items && basket.basket_items.length > 0 ? (
            basket.basket_items.map((item) => (
              <div key={item.product.id} className="basket-product-box">
                <div>
                  <img
                    src={`/media${item.product.image}`}
                    alt="Product image"
                    className="basket-product-image"
                  />
                </div>
                <div className="basket-product-info">
                  <div className="basket-product-info-header">
                    <div>
                      <p className="basket-product-name">{item.product.name}</p>
                    </div>
                    <IoMdClose
                      className="basket-delete-product"
                      onClick={() =>
                        deleteProductFromBasket({ product: item.product.id })
                      }
                    />
                  </div>

                  <p className="basket-product-price">{item.product.price}$</p>
                  <div className="basket-quantity-container">
                    <div> Quantity: </div>
                    <div className="basket-quantity-box">
                      <button
                        className="basket-quantity-btn"
                        onClick={() =>
                          handleBasketQuantityMinusBtn(
                            item.product.id,
                            item.quantity
                          )
                        }
                      >
                        -
                      </button>
                      <div
                        readOnly
                        className="basket-quantity"
                        value={basketQuantity}
                      >
                        {item.quantity}
                      </div>
                      <button
                        className="basket-quantity-btn"
                        onClick={handleBasketQuantityPlusBtn}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="basket-price-box">
                    Price: {item.quantity} x {item.product.price}$ ={" "}
                    <span className="basket-product-price">
                      {" "}
                      {item.amount}$
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Your basket is empty.</p>
          )}
          <div className="total-price">Total Price: {basket.total_amount}$</div>
          <button className="basket-buy-btn">Buy</button>
        </div>
      </Box>
    </Drawer>
  );

  // URL'den query parametresini oku ve başlangıç state'i olarak ayarla
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("query") || ""; // Eğer query yoksa boş olarak başlat

  const [query, setQuery] = useState(initialQuery);
  const { searchedProducts } = useSelector((store) => store.product);

  const handleLogoClick = () => {
    navigate($U.HOME);
  };

  useEffect(() => {
    // İlk yüklendiğinde URL'deki query parametresine göre arama yap
    dispatch(searchProducts({ query: initialQuery }));
  }, [dispatch, initialQuery]);

  useEffect(() => {
    // Query değiştiğinde URL'i güncelle
    if (query !== initialQuery) {
      if (query) {
        navigate(`/?query=${encodeURIComponent(query)}`, {
          state: { searchedProducts },
        });
      } else {
        navigate($U.HOME);
      }
    }
  }, [query, initialQuery, navigate]);

  useEffect(() => {
    // Query değiştiğinde arama yap
    dispatch(searchProducts({ query }));
  }, [dispatch, query]);

  // Input değişikliğini yönet
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  let { loading, error, isAuthenticated, user } = useSelector(
    (store) => store.auth
  );

  if (Cookies.get("authToken")) {
    isAuthenticated = true;
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/register" className="auth-router">
        <MenuItem onClick={handleMenuClose}>Register</MenuItem>
      </Link>
      <Link to="/login" className="auth-router">
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      </Link>
    </Menu>
  );

  const logoutMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="#" className="auth-router">
        <MenuItem>My Orders</MenuItem>
      </Link>
      <Link to="/register" className="auth-router" onClick={handleLogout}>
        <MenuItem>Logout</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 1000 }}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ backgroundColor: "#fff", color: "#000" }}>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" className="header-logo" onClick={handleLogoClick}>
              E-Commerce
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: "30px" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={query}
              onChange={handleInputChange}
            />
          </Search>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton size="large" color="inherit" onClick={handleBasketDrawer}>
            <Badge color="error">
              <FaShoppingBasket size={24} />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {basketDrawer}
      {renderMobileMenu}
      {isAuthenticated ? logoutMenu : renderMenu}
    </Box>
  );
}
