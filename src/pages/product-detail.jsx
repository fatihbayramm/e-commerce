import "../css/product-detail.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../redux/slices/product/product-actions";
import { addProductToBasket } from "../redux/slices/basket/basket-actions";

function ProductDetail() {
  // TODO: mobil modda +, - butonlari bozuluyor. duzelt.
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();
  const { products } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const productDetail = products && products.find((p) => p.id === parseInt(id));

  const handleBasket = (productData) => {
    const token = Cookies.get("authToken");
    if (token) {
      dispatch(addProductToBasket({ productData }));
    } else {
      console.log("Token not found. User might not be authenticated.");
    }
  };

  const handleMinusQuantity = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const handlePlusQuantity = () => {
    if (quantity > productDetail.stock - 1) return;
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Container maxWidth="xl" style={{ fontFamily: "Arial" }}>
        <Header />
        {productDetail ? (
          <div className="product-detail-container">
            <div className="product-info-header">
              <div className="product-name-box">
                <div className="product-material">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="product-name"> {productDetail.name}</div>
                <div className="product-category"> Lorem, ipsum dolor.</div>
              </div>
              <div className="product-sku">
                Product code: {productDetail.sku}
              </div>
            </div>
            <div className="product-image">
              <img
                src={productDetail.image}
                alt="This file is not supported by your browser."
                className="product-detail-image"
              />
            </div>
            <div className="product-info">
              <div className="product-info-header-2">
                <div className="product-name-box-2">
                  <div className="product-material-2">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="product-name-2"> {productDetail.name}</div>
                  <div className="product-category-2"> Lorem, ipsum dolor.</div>
                </div>
                <div className="product-sku-2">
                  Product code: {productDetail.sku}
                </div>
              </div>
              <div className="product-info-main">
                <div className="product-info-inner">
                  {" "}
                  <div>
                    <div className="product-price">${productDetail.price}</div>
                    <div className="product-stock">
                      Stock count: {productDetail.stock}
                    </div>
                  </div>
                  <div className="product-number-box">
                    <div>
                      <button
                        className="product-number-btn"
                        onClick={handleMinusQuantity}
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="product-number"
                      ></input>
                    </div>
                    <div>
                      <button
                        className="product-number-btn"
                        onClick={handlePlusQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="basket-fav-btn">
                  <div className="basket-btn">
                    <button
                      className="add-to-basket-btn pd-btn"
                      onClick={() =>
                        handleBasket({
                          product: productDetail.id,
                          quantity: quantity,
                        })
                      }
                    >
                      Add To Basket
                    </button>
                  </div>
                  <div className="fav-btn">
                    <button className="favorite-btn pd-btn">
                      <div className="favorite-box">
                        <div>Favorite</div>
                        <div>
                          <MdFavoriteBorder fontSize={14} />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="accordion-menu">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <span className="accordion-title">Product Features</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.Nulla
                    facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.Nulla
                    facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <span className="accordion-title">Product Use</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <span className="accordion-title">Return</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <span className="accordion-title">Seller Information</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
      <Footer />
    </>
  );
}

export default ProductDetail;
