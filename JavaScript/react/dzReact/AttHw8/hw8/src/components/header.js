import { Link } from "react-router";
import MainPage from "../pages/mainPage";
import BasketPage from "../pages/basketPage";

import top_menu_logo from "../img/top_menu_logo.svg";
import magnifier from "../img/magnifier.svg";
import buttonMenu from "../img/buttonMenu.svg";
import personal_account from "../img/personal_account.png";
import basket from "../img/basket.png";

function Header() {
  return (
    <div className="header center">
      <section className="left_header">
        <Link to={"/"} style={{ cursor: "pointer" }}>
          <img src={top_menu_logo} alt="лого" />
        </Link>

        <button className="header_search">
          <img src={magnifier} alt="magnifier" />
        </button>
      </section>
      <div className="right_header">
        <div className="menu_button">
          <img className="right_img_header" src={buttonMenu} alt="menu" />
          <div className="dropdown_menu">
            <div className="down_menu">
              <h1 className="h1_dropdown_menu">Menu</h1>
              <div className="sections_dropdown_menu  name_category">
                MAN
                <Link className="category_dropdown_menu" to={"#"}>
                  Accessories
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Bags
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Denim
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  T-Shirts
                </Link>
              </div>
              <div className="sections_dropdown_menu name_category">
                WOMEN
                <Link className="category_dropdown_menu" to={"#"}>
                  Accessories
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Jackets & Coats
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Polos
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  T-Shirts
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Shirts
                </Link>
              </div>
              <div className="sections_dropdown_menu name_category">
                KIDS
                <Link className="category_dropdown_menu" to="">
                  Accessories
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Jackets & Coats
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Polos
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  T-Shirts
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Shirts
                </Link>
                <Link className="category_dropdown_menu" to={"#"}>
                  Bags
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to={"#"} className="for_phone">
          <img className="right_img_header" src={personal_account} alt="personal_account" />
        </Link>
        <Link to={"/basket"} className="for_phone">
          <img className="right_img_header" src={basket} alt="basket" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
