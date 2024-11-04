import "../css/home.css";
import Container from "@mui/material/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import GetProducts from "../components/get-products";
import Loading from "../components/loading";
import LoadingAuth from "../components/loading-auth";

function Home() {
  return (
    <div className="home">
      <Container maxWidth="xl" style={{ fontFamily: "Arial" }}>
        <LoadingAuth />
        <Header />
        <Loading />
        <GetProducts />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
