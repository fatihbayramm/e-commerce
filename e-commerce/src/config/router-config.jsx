import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/product-list";
import ProductDetail from "../pages/product-detail";
import GetProducts from "../components/get-products";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetProducts />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
