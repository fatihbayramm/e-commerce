import { useLocation } from "react-router-dom";
import "../css/product-detail.css";
import { MdFavoriteBorder } from "react-icons/md";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function ProductDetail() {
  // TODO: Responsive yap.
  const location = useLocation();
  const { product } = location.state || {};

  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!product) {
    return <p>No product information found.</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img
          src={product.image}
          alt="This file is not supported by your browser."
          className="product-detail-image"
        />
      </div>
      <div className="product-info">
        <div className="product-info-header">
          <div className="product-name">
            <div className="product-material">Lorem ipsum dolor sit amet.</div>
            <div> {product.name}</div>
            <div className="product-category"> Lorem, ipsum dolor.</div>
          </div>
          <div className="product-sku">Product sku: {product.sku}</div>
        </div>
        <div className="product-info-main">
          <div>
            {" "}
            <div className="product-price">${product.price}</div>
            <div className="product-stock">Stock count: {product.stock}</div>
          </div>

          <div className="basket-fav-btn">
            <div className="basket-btn">
              <button className="add-to-basket-btn pd-btn">
                Add To Basket
              </button>
            </div>
            <div className="fav-btn">
              <button className="favorite-btn pd-btn">
                <div className="favorite-box">
                  <div>Favorite</div>
                  <div>
                    <MdFavoriteBorder fontSize={24} />
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
              facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.Nulla facilisi.
              Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
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
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
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
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
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
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
