import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <div>
          <h4 className="footer-title">Sources</h4>
          <ul className="footer-ul">
            <li>
              <a href="#">Find Store</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Feed Back</a>
            </li>
            <li>
              <a href="#">Promotion Codes</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Help</h4>
          <ul className="footer-ul">
            <li>
              <a href="#">Order</a>
            </li>
            <li>
              <a href="#">Shipping and Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Company</h4>
          <ul className="footer-ul">
            <li>
              <a href="#">About E-Commerce</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Carrier</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 E-Commerce, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
