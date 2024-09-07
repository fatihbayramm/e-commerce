import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../pages/product-list";
import { getAllProducts } from "../redux/slices/product-slice";

function GetProducts() {
  // buradan urunler cekilip liste sayfasina gonderilecek.

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      {products &&
        products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
    </div>
  );
}

export default GetProducts;
