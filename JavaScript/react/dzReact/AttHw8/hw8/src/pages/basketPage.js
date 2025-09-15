import Footer from "../components/footer";
import Header from "../components/header";
import Subscribe from "../components/subscribe";
import "./css/basketCss/CartShopping.css";
import { changeBasketProductQuantity, deleteCardAtBasket,clearBasket } from "../store/cardSlice";

import { useDispatch, useSelector } from "react-redux";

function BasketPage() {
  const dispatch = useDispatch();
  const changeAllPrice = (quantity, id) => {
    dispatch(changeBasketProductQuantity({ quantity, id }));
  };
  const { basket } = useSelector((state) => state.data);
  const totalCost = basket.reduce((acc, card) => acc + card.price * card.quantity, 0);

  const deleteCard = (id) => {
    console.log(id);
    dispatch(deleteCardAtBasket({ id }));
  };
  return (
    <>
      <Header />

      <section className="top center">
        <h2 className="top_header">SHOPPING CART </h2>
      </section>
      <section className="basket center">
        <section className="productsLocation">
          {basket.length > 0 ? basket.map((card) => (
            <article className="basket_box" key={card.id}>
              <img src={card.img} alt="foto" style={{ maxWidth: 100 + "%", maxHeight: 100 + "%" }} />
              <article className="card">
                <h2 className="card_head">{card.name}</h2>
                <article className="card_parameters">
                  <div className="card_parameters_list">
                    <p className="card_parameters_list_choice">
                      Price: <span className="card_parameters_list_choice_price">${card.price}</span>
                    </p>
                    <p className="card_parameters_list_choice">
                      Color: <span className="card_parameters_list_choice_text">Red</span>
                    </p>
                    <p className="card_parameters_list_choice">
                      Size: <span className="card_parameters_list_choice_text">{card.size}</span>
                    </p>
                    <p className="card_parameters_list_choice">
                      Quantity:
                      <input className="card_parameters_list_choice_text border" type="number" min={1} id={card.id} value={card.quantity} onChange={(e) => changeAllPrice(e.target.value, e.target.id)} />
                    </p>
                  </div>
                </article>
              </article>
              <button style={{ border: "none", backgroundColor: "white", width: 18 + "px", height: 18 + "px", cursor: "pointer" }} id={card.id} onClick={(e) => deleteCard(e.target.parentNode.parentNode.id)}>
                <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <desc></desc>
                  <defs />
                  <path
                    id="Vector1"
                    d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
                    fill="#575757"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </article>
          )) : <h1 className="basket_empty">Корзина пуста</h1>}
        </section>

        <section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="basket_QUOTE"
          >
            <h2 className="basket_QUOTE_head">SHIPPING ADRESS</h2>
            <input className="basket_QUOTE_input" type="text" required placeholder="Input country" />
            <input className="basket_QUOTE_input" type="text" required placeholder="Input state" />
            <input className="basket_QUOTE_input" type="text" required placeholder="Postcode / Zip" />
            <br />
            <button className="basket_QUOTE_button" type="submit" value="Submit">
              GET A QUOTE
            </button>
          </form>
          <article className="basket_total">
            <h3 className="basket_total_sub">
              SUB TOTAL <span>${totalCost}</span>
            </h3>
            <h3 className="basket_total_grand">
              GRAND TOTAL <span className="basket_total_grand_price">${totalCost}</span>
            </h3>
            <div className="basket_total_butten_topBorder">
              <button className="basket_total_butten">PROCEED TO CHECKOUT</button>
            </div>
          </article>
        </section>
      </section>
      <div className="basket_bottom center">
        <button type="button" className="basket_bottom_button" onClick={() => dispatch(clearBasket())}>
          CLEAR SHOPPING CART
        </button>
        <button type="button" className="basket_bottom_button">
          CONTINUE SHOPPING
        </button>
      </div>

      <Subscribe />
      <Footer />
    </>
  );
}

export default BasketPage;
