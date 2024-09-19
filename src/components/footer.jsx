import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <div>
          <ul className="footer-ul">
            <li>
              <a href="#">Mağaza Bul</a>
            </li>
            <li>
              <a href="#">Üye Ol</a>
            </li>
            <li>
              <a href="#">Geri Bildirim</a>
            </li>
            <li>
              <a href="#">Promosyon Kodları</a>
            </li>
            <li>
              <a href="#">Bize Ulaş</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-ul">
            <li>
              <a href="#">Sipariş Durumu</a>
            </li>
            <li>
              <a href="#">Kargo ve Teslimat</a>
            </li>
            <li>
              <a href="#">İadeler</a>
            </li>
            <li>
              <a href="#">Ödeme Seçenekleri</a>
            </li>
            <li>
              <a href="#">İncelemeler</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-ul">
            <li>
              <a href="#">E-Commerce Hakkında</a>
            </li>
            <li>
              <a href="#">Haberler</a>
            </li>
            <li>
              <a href="#">Kariyer</a>
            </li>
            <li>
              <a href="#">Yatırımcılar</a>
            </li>
            <li>
              <a href="#">Sürdürülebilirlik</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
