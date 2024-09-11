import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../pages/product-list";
import { getAllProducts } from "../redux/slices/product-slice";

function GetProducts() {
  // buradan urunler cekilip liste sayfasina gonderilecek.

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return <div>{products && <ProductList products={products} />}</div>;
}

export default GetProducts;
