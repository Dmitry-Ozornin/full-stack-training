import { Link } from "react-router";

function MainPageNavForCatalog() {
  return (
    <section className="sections center">
      <article className="sections_for_women" style={{ lineHeight: "2", textAlign: "center" }}>
        <Link to="/catalog" className="sections_url" state={{ page: "WOMEN" }}>
          <h6>
            <span className="sections_text">30% OFF</span> <br />
            <span className="section_names">FOR WOMEN</span>
          </h6>
        </Link>
      </article>
      <article className="sections_for_men " style={{ lineHeight: "2", textAlign: "center" }}>
        <Link to="/catalog" className="sections_url" state={{ page: "MEN" }}>
          <h6>
            <span className="sections_text">HOT DEAL</span> <br />
            <span className="section_names">FOR MEN</span>
          </h6>
        </Link>
      </article>
      <article className="sections_for_kids " style={{ lineHeight: "2", textAlign: "center" }}>
        <Link to="/catalog" className="sections_url" state={{ page: "KIDS" }}>
          <h6>
            <span className="sections_text">NEW ARRIVALS</span> <br />
            <span className="section_names">FOR KIDS</span>
          </h6>
        </Link>
      </article>
      <article className="sections_for_accesories " style={{ lineHeight: "2", textAlign: "center" }}>
        <Link to="/catalog" className="sections_url" state={{ page: "LUXIROUS & TRENDY ACCESORIES" }}>
          <h6>
            <span className="sections_text">LUXIROUS & TRENDY</span> <br />
            <span className="section_names">ACCESORIES</span>
          </h6>
        </Link>
      </article>
    </section>
  );
}

export default MainPageNavForCatalog;
