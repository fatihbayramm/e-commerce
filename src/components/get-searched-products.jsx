import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../pages/product-list";
import { searchProducts } from "../redux/slices/product-slice";

function GetSearchedProducts() {
  const dispatch = useDispatch();

  const { searchedProducts } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(searchProducts());
  }, [dispatch]);

  return (
    <div>
      {searchedProducts && <ProductList searchedProducts={searchedProducts} />}
    </div>
  );
}

export default GetSearchedProducts;
