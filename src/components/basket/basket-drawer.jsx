import Drawer from "@mui/material/Drawer";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import LoadingBasket from "./loading-basket";
import BasketError from "../../errors/basket-error";
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { getBasket } from "../../redux/slices/basket/basket-actions";
import { updateProductInBasket } from "../../redux/slices/basket/basket-actions";
import { removeProductFromBasket } from "../../redux/slices/basket/basket-actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BasketDrawer({ toggleDrawer, setToggleDrawer }) {
  const dispatch = useDispatch();
  const token = Cookies.get("authToken");

  const { basket, loading, error } = useSelector((store) => store.basket);

  useEffect(() => {
    if (toggleDrawer) {
      dispatch(getBasket({ token }));
    }
  }, [toggleDrawer, dispatch, token]);

  const handleBasketQuantityMinusBtn = (productData) => {
    if (productData.quantity === 0) {
      dispatch(removeProductFromBasket({ product: productData }));
    } else {
      dispatch(updateProductInBasket({ productData }));
    }
  };

  const handleBasketQuantityPlusBtn = (productData) => {
    dispatch(updateProductInBasket({ productData }));
  };

  const deleteProductFromBasket = (product) => {
    dispatch(removeProductFromBasket({ product }));
  };

  return (
    <Drawer
      open={toggleDrawer}
      onClose={() => setToggleDrawer(false)}
      anchor="right"
    >
      <Box sx={{ width: "400px", textAlign: "center" }}>
        <h1 className="basket-title">My Basket</h1>
        <div>
          {basket && basket.basket_items && loading && (
            <LoadingBasket loading={loading} />
          )}
          {basket && basket.basket_items && basket.basket_items.length > 0 ? (
            basket.basket_items.map((item) => (
              <div key={item.product.id}>
                <div className="basket-product-box">
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
                        <p className="basket-product-name">
                          {item.product.name}
                        </p>
                      </div>
                      <IoMdClose
                        className="basket-delete-product"
                        onClick={() =>
                          deleteProductFromBasket({
                            product: item.product.id,
                          })
                        }
                      />
                    </div>

                    <p className="basket-product-price">
                      {item.product.price}$
                    </p>
                    <div className="basket-quantity-container">
                      <div> Quantity: </div>
                      <div className="basket-quantity-box">
                        <button
                          className="basket-quantity-btn"
                          onClick={() =>
                            handleBasketQuantityMinusBtn({
                              product: item.product.id,
                              quantity: item.quantity - 1,
                            })
                          }
                        >
                          -
                        </button>
                        <div readOnly className="basket-quantity">
                          {item.quantity}
                        </div>
                        <button
                          className="basket-quantity-btn"
                          onClick={() =>
                            handleBasketQuantityPlusBtn({
                              product: item.product.id,
                              quantity: item.quantity + 1,
                            })
                          }
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
              </div>
            ))
          ) : (
            <p>Your basket is empty.</p>
          )}
          <div className="total-price">Total Price: {basket.total_amount}$</div>
          <Link to="/checkout">
            <button className="basket-buy-btn">Buy</button>
          </Link>
        </div>
      </Box>
      {error && <BasketError error={error} basket={basket.basket_items} />}
    </Drawer>
  );
}

export default BasketDrawer;
