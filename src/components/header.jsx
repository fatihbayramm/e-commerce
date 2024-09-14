import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/slices/product-slice";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/header.css";

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
      width: "20ch",
    },
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // URL'den query parametresini oku ve başlangıç state'i olarak ayarla
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("query") || ""; // Eğer query yoksa boş olarak başlat

  const [query, setQuery] = useState(initialQuery);
  const { searchedProducts } = useSelector((store) => store.product);

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
        navigate("/");
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
            <a href="/" className="header-logo">
              E-Commerce
            </a>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: "30px" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={query}
              onChange={handleInputChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
