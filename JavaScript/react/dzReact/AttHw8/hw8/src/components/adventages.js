import Forma_1 from "../img/Forma_1.svg";
import Forma_2 from "../img/Forma_2.svg";
import Forma_3 from "../img/Forma_3.svg";
function Adventages() {
  return (
    <section className="advantages center">
      <article className="type_of_advantage">
        <img src={Forma_1} alt="car" />
        <h2 className="header_adventage" style={{ marginTop: 28.07 + "px" }}>
          Free Delivery
        </h2>
        <p className="text_adventage">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>
      <article className="type_of_advantage">
        <img src={Forma_2} alt="car" />
        <h2 className="header_adventage" style={{ marginTop: 19.5 + "px" }}>
          Sales & discounts
        </h2>
        <p className="text_adventage">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>
      <article className="type_of_advantage">
        <img src={Forma_3} alt="car" style={{ marginBottom: 25.06 + "px" }} />
        <h2 className="header_adventage">Quality assurance</h2>
        <p className="text_adventage">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>
    </section>
  );
}

export default Adventages;
