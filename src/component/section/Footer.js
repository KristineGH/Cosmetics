import "../../styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_BRAND } from "../../reducer/reducer";
import { selectBrands } from "../../selectors/fierbase";
import { Link } from "react-router-dom";
import faceLogo from "../../Pics/icons/facebook.png";
import instaLogo from "../../Pics/icons/instagram.png";
import youtubeLogo from "../../Pics/icons/youtube.png";

function Footer() {
  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();
  return (
    <footer>
      <div
        className="brands-main-content"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "200px", margin: "50px 50px", marginLeft: "15%" }}>
          <h2 style={{ color: "white" }}>Brands</h2>
          {brands.map((brand, i) => (
            <div key={i}>
              <Link to={`/brands/${brand.name}`}>
                <div
                  className="footerItem"
                  onClick={() => {
                    dispatch({ type: SELECTED_BRAND, payload: brand });
                  }}
                >
                  {brand.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div style={{ width: "200px", margin: "50px 50px", marginLeft: "15%" }}>
          <h2 style={{ color: "white" }}>CONNECT</h2>
          <li className="footerItem">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src={instaLogo} className="logos" alt="" />
            </a>
          </li>
          <li className="footerItem">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src={faceLogo} className="logos" alt="" />
            </a>
          </li>
          <li className="footerItem">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtubeLogo} className="logos" alt="" />
            </a>
          </li>
        </div>
        <div style={{ width: "200px", margin: "50px 50px", marginLeft: "15%" }}>
          <h2 style={{ color: "white" }}>ACCOUNT</h2>
          <Link to="/login">
            <li className="footerItem">My Account</li>
          </Link>
          <li className="footerItem">Order Status</li>
          <li className="footerItem">My Favourites</li>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
