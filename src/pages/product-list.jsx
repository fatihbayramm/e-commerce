import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../css/product-list.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineFilterList } from "react-icons/md";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/slices/product-slice";

function ProductList({ products }) {
  // buradan da app.jsx e gonderilip goruntulenecek.

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = (product) => {
    navigate("/product-detail/" + product.id, { state: { product } });
  };

  const [toggleFilter, setToggleFilter] = useState(false);

  const { filteredProducts } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(filterProducts({ min: 1, max: 100 }));
  }, [dispatch]);

  console.log(filteredProducts);

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
              <div className="filters">
                <div className="filter-title">Browse by price</div>
                <TextField
                  id="outlined-number"
                  label="Min"
                  type="number"
                  size="small"
                />
                <TextField
                  id="outlined-number"
                  label="Max"
                  type="number"
                  size="small"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
        <section>
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleCardClick(product)}
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
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}

export default ProductList;
