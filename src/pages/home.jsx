import Container from "@mui/material/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/home.css";
import GetProducts from "../components/get-products";

function Home() {
  return (
    <div className="home">
      <Container maxWidth="xl" style={{ fontFamily: "Arial" }}>
        <Header />
        <GetProducts />

        <Footer />
      </Container>
    </div>
  );
}

export default Home;
