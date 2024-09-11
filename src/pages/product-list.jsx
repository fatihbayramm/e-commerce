import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../css/product-list.css";
import { useNavigate } from "react-router-dom";

function ProductList({ products }) {
  // buradan da app.jsx e gonderilip goruntulenecek.

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate("/product-detail/" + product.id, { state: { product } });
  };
  return (
    <div className="product-list-container">
      <main>
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
