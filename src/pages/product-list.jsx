import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../css/product-list.css";
import { Link } from "react-router-dom";
import { MdOutlineFilterList } from "react-icons/md";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/slices/product-slice";
import Button from "@mui/material/Button";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

function ProductList({ products }) {
  const location = useLocation();
  const { searchedProducts } = location.state || {};
  const dispatch = useDispatch();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [toggleFilter, setToggleFilter] = useState(false);

  const { filteredProducts } = useSelector((store) => store.product);

  const getFilteredProducts = () => {
    if (priceMin > 0 || priceMax > 0) {
      dispatch(filterProducts({ min: priceMin, max: priceMax }));
    }
    console.log(filteredProducts);
  };

  const handlePriceMinChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setPriceMin(value);
    }
  };

  const handlePriceMaxChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setPriceMax(value);
    }
  };

  const displayedProducts =
    searchedProducts && searchedProducts.length > 0
      ? searchedProducts
      : filteredProducts && filteredProducts.length > 0
      ? filteredProducts
      : products;

  return (
    <div className="product-list-container">
      <main>
        <nav className="filters-box">
          <div>
            <button
              className={toggleFilter ? "show-filters-active" : "show-filters"}
              onClick={() => setToggleFilter(!toggleFilter)}
            >
              <div>Show Filters</div>
              <div>
                <MdOutlineFilterList size={24} />
              </div>
            </button>

            {toggleFilter ? (
              //TODO: arama yaptiktan sonra filtreleme calismiyor.
              //TODO: burada filtreler bos gonderiliyorsa kullaniciya bu alani bos birakamazsiniz uyarisi gonderilebilir.
              //TODO: max degeri min degerinden kucukse yine kullaniciya uyari gidebilir.
              //TODO: filtreli urunler yuklenene kadar loading ekrani yapilabilir. (opsiyonel).
              //TODO: filtre tasarimi guzellestirilebilir.
              //TODO: filtreler ayni degerde girilirse kullaniciya uyari versin.
              <div className="filters">
                <div className="filter-title">Browse by price</div>
                <TextField
                  value={priceMin}
                  onChange={handlePriceMinChange}
                  id="outlined-number"
                  label="Min"
                  type="number"
                  size="small"
                />
                <TextField
                  value={priceMax}
                  onChange={handlePriceMaxChange}
                  id="outlined-number"
                  label="Max"
                  type="number"
                  size="small"
                />
                <Button
                  color="black"
                  variant="text"
                  onClick={getFilteredProducts}
                  className="search-icon"
                >
                  <IoSearchOutline size={24} />
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
        <section>
          {displayedProducts &&
            displayedProducts.map((product) => (
              <Link
                to={`/product-detail/${product.id}`}
                key={product.id}
                className="product-card"
                state={{ product }}
              >
                <Card
                  sx={{
                    maxWidth: 600,
                  }}
                >
                  <CardMedia
                    sx={{ height: 500 }}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, ad!
                    </Typography>
                    <Typography sx={{ marginTop: "25px", fontSize: "24px" }}>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </section>
      </main>
    </div>
  );
}

export default ProductList;
