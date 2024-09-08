import { useLocation } from "react-router-dom";
import "../css/product-detail.css";
import { MdFavoriteBorder } from "react-icons/md";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};

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
          <div className="product-price">${product.price}</div>
          <div className="product-stock">Stock count: {product.stock}</div>
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
          <div className="accordion-menu"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
