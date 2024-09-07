import { useState, useEffect } from "react";
import GetProducts from "./components/get-products";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "@mui/material/Container";
import RouterConfig from "./config/router-config";

function App() {
  return (
    <div className="app">
      <Container maxWidth="xl" style={{ fontFamily: "Arial" }}>
        <Header />
        <RouterConfig />
        <GetProducts />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
