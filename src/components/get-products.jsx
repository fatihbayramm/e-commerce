import ProductList from "../pages/product-list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/product/product-actions";

function GetProducts() {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return <div>{products && <ProductList products={products} />}</div>;
}

export default GetProducts;
