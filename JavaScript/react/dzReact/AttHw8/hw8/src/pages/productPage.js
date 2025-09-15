import Header from "../components/header";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import "./css/Catalogcss/Catalogcss.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTasks } from "../store/cardSlice";
import { addBasket } from "../store/cardSlice";

import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import "./css/productCss/styleProduct.css";

function ProductPage() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const addToBasket = (id) => {
    dispatch(addBasket({ id }));
  };
  const location = useLocation();
  const { num } = location.state;
  const [nameOfpage, setNameOfpage] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [num]);

  return (
    <>
      <Header />
      <nav className="navugation center">
        <h2 className="nav_header">NEW ARRIVALS </h2>
        <div className="nav">
          <Link to={"/"} className="nav_links_text">
            HOME
          </Link>
          <span className="nav_separator">/</span>
          <span className="nav_separator">/</span>
          <span className="nav_links_text">{}</span>
        </div>
      </nav>
      {cards.map((card) => {
        if (card.id === num) {
          return (
            <section className="img_product" key={card.id}>
              <img className="img_product_arrow left" src="img/Group34.svg" alt="влево" />
              <img className="img_product_foto" src={card.img} alt="товар" />
              <img className="img_product_arrow right" src="img/Group35.svg" alt="вправо" />
            </section>
          );
        }
      })}
      {cards.map((card) => {
        if (card.id === num) {
          return (
            <section className="product  center nocenter" key={card.id}>
              <article className="product_about">
                <h2 className="product_about_category">COLLECTION</h2>
                <svg width="63.000000" height="3.025391" viewBox="0 0 63 3.02539" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <desc></desc>
                  <defs />
                  <path id="Rectangle28" d="M0 0L63 0L63 3.02L0 3.02L0 0Z" fill="#EF5B70" fill-opacity="1.000000" fill-rule="evenodd" />
                </svg>
                <h2 className="product_about_header">{card.name}</h2>
                <p className="product_about_text">
                  {card.description} <br className="product_about_text_nowrap" />
                  Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.{" "}
                </p>
                <p className="product_about_price">${card.price}</p>
                <svg className="product__priceline" width="642.000000" height="1.008545" viewBox="0 0 642 1.00854" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path id="Vector" d="M0 0L642 0L642 1L0 1L0 0Z" fill="#EF5B70" fill-opacity="1.000000" fill-rule="evenodd" />
                </svg>
                <div className="product_parameters">
                  <form className="product_parameters_atribute">
                    <select className="product_parameters_atribute" name="color">
                      <option className="product_parameters_atribute_chose" value="">
                        CHOOSE COLOR
                      </option>
                      <option className="product_parameters_atribute_chose" value="xs">
                        RED
                      </option>
                      <option className="product_parameters_atribute_chose" value="s">
                        BLUE
                      </option>
                      <option className="product_parameters_atribute_chose" value="m">
                        WHITE
                      </option>
                      <option className="product_parameters_atribute_chose" value="l">
                        BLACK
                      </option>
                    </select>
                  </form>
                  <form className="product_parameters_atribute">
                    <select className="product_parameters_atribute" name="color">
                      <option className="product_parameters_atribute_chose" value="">
                        CHOOSE SIZE{" "}
                      </option>
                      <option className="product_parameters_atribute_chose" value="xs">
                        X
                      </option>
                      <option className="product_parameters_atribute_chose" value="s">
                        S
                      </option>
                      <option className="product_parameters_atribute_chose" value="m">
                        M
                      </option>
                      <option className="product_parameters_atribute_chose" value="l">
                        L
                      </option>
                    </select>
                  </form>
                  <form className="product_parameters_atribute">
                    <select className="product_parameters_atribute" name="color">
                      <option className="product_parameters_atribute_chose" value="">
                        QUANTITY
                      </option>
                      <option className="product_parameters_atribute_chose" value="xs">
                        1
                      </option>
                      <option className="product_parameters_atribute_chose" value="s">
                        2
                      </option>
                      <option className="product_parameters_atribute_chose" value="m">
                        3
                      </option>
                      <option className="product_parameters_atribute_chose" value="l">
                        4
                      </option>
                    </select>
                  </form>
                </div>
                <button type="submit" id={num} className="product_add_cart" onClick={(e) => addToBasket(e.target.id)}>
                  <svg width="26.012207" height="24.203125" viewBox="0 0 26.0122 24.2031" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      className="product_add_cart_img"
                      d="M5.49 21.96C5.5 21.53 5.64 21.1 5.88 20.75C6.12 20.39 6.47 20.12 6.87 19.96C7.27 19.8 7.7 19.76 8.12 19.85C8.54 19.94 8.93 20.15 9.23 20.46C9.53 20.77 9.73 21.16 9.81 21.58C9.89 22.01 9.85 22.45 9.68 22.85C9.52 23.25 9.24 23.59 8.88 23.83C8.52 24.07 8.1 24.2 7.67 24.2C7.38 24.19 7.1 24.13 6.83 24.02C6.57 23.91 6.33 23.74 6.12 23.53C5.92 23.33 5.76 23.08 5.65 22.81C5.55 22.54 5.49 22.25 5.49 21.96ZM21.3 24.2C20.87 24.2 20.44 24.08 20.07 23.85C19.71 23.61 19.42 23.28 19.24 22.88C19.06 22.48 19.01 22.04 19.08 21.6C19.14 21.17 19.34 20.77 19.63 20.45C19.92 20.13 20.3 19.9 20.72 19.79C21.14 19.68 21.59 19.7 21.99 19.85C22.4 19.99 22.76 20.25 23.03 20.6C23.29 20.94 23.45 21.36 23.48 21.8C23.52 22.39 23.33 22.97 22.95 23.43C22.77 23.65 22.54 23.83 22.28 23.96C22.03 24.1 21.75 24.18 21.46 24.2L21.3 24.2ZM8.59 17.26C8.38 17.26 8.17 17.19 8 17.06C7.83 16.93 7.71 16.74 7.66 16.54L3.73 1.97L0.97 1.97C0.71 1.97 0.47 1.86 0.28 1.68C0.1 1.49 0 1.24 0 0.98C0 0.72 0.1 0.47 0.28 0.28C0.47 0.1 0.71 0 0.97 0L4.45 0C4.66 0 4.87 0.07 5.04 0.2C5.21 0.33 5.33 0.51 5.38 0.72L9.31 15.29L20.01 15.29L23.57 6.9L11.71 6.9C11.45 6.9 11.21 6.8 11.02 6.61C10.84 6.43 10.74 6.17 10.74 5.91C10.74 5.65 10.84 5.4 11.02 5.22C11.21 5.03 11.45 4.93 11.71 4.93L25.05 4.93C25.21 4.93 25.37 4.97 25.5 5.05C25.64 5.12 25.76 5.24 25.85 5.37C25.94 5.51 25.99 5.67 26 5.83C26.02 5.99 25.99 6.16 25.93 6.31L21.54 16.67C21.46 16.84 21.34 16.99 21.18 17.1C21.03 17.2 20.84 17.26 20.66 17.26L8.59 17.26Z"
                      fill="#EF5B70"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  Add to Cart
                </button>
              </article>
            </section>
          );
        }
      })}
      <section class="offers center">
        {cards.map((card) => {
          if (card.id < 4) {
            return (
              <Link to="/product" class="offers_items" state={{ num: card.id }}>
                <img src={card.img} alt="товар" />
                <h2 class="offers_items_header">{card.name}</h2>
                <p class="offers_items_text">{card.description}</p>
                <p class="offers_items_price">${card.price}</p>
              </Link>
            );
          }
        })}
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}

export default ProductPage;
