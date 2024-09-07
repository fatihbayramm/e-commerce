import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/product-list.css";
import { useNavigate } from "react-router-dom";

function ProductList({ products }) {
  // buradan da app.jsx e gonderilip goruntulenecek.

  const navigate = useNavigate();
  return (
    <div className="product-list-container">
      {" "}
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate("/product-detail/" + product.id)}
          >
            <Card
              sx={{
                maxWidth: 600,
              }}
            >
              <CardMedia
                sx={{ height: 500 }}
                image={product.image}
                title="denemee"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  ad!
                </Typography>
                <Typography sx={{ marginTop: "25px", fontSize: "24px" }}>
                  {product.price} TL
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">asdasd</Button>
                <Button size="small"></Button>
              </CardActions> */}
            </Card>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
