import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../pages/product-list";
import { getAllProducts } from "../redux/slices/product-slice"; // doğru aksiyon yaratıcıları

function GetProducts() {
  // Buradan ürünler çekilip liste sayfasına gönderilecek.

  const dispatch = useDispatch();

  // Tüm product dilimini (slice) tek bir useSelector ile al
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts()); // Ürünleri yükleme aksiyonu // Filtreleme aksiyonu (doğru aksiyon ismini kullanın)
  }, [dispatch]);

  return <div>{products && <ProductList products={products} />}</div>;
}

export default GetProducts;
