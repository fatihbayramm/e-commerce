function ProductList({ products }) {
  // buradan da app.jsx e gonderilip goruntulenecek.
  console.log(products);
  return (
    <div style={{ display: "flex" }}>
      {" "}
      {products &&
        products.map((product) => <div key={product.id}>{product.name}</div>)}
    </div>
  );
}

export default ProductList;
