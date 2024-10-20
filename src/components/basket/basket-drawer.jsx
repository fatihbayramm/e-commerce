import Drawer from "@mui/material/Drawer";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBasket } from "../../redux/slices/basket/basket-slice";
import { updateProductInBasket } from "../../redux/slices/basket/basket-slice";
import { removeProductFromBasket } from "../../redux/slices/basket/basket-slice";

function BasketDrawer({ toggleDrawer, setToggleDrawer }) {
  const { basket } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const token = Cookies.get("authToken");

  const handleBasketDrawer = (toggleDrawer) => {
    if (toggleDrawer) {
      dispatch(getBasket({ token }));
    }
  };

  handleBasketDrawer();

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
          <button className="basket-buy-btn">Buy</button>
        </div>
      </Box>
    </Drawer>
  );
}

export default BasketDrawer;
