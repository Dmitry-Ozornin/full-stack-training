import cover from "../img/cover.svg";
import Rectangle16copy from "../img/Rectangle16copy.svg";

function MainPageCover() {
  return (
    <section className="cover center">
      <img className="cover_img" src={cover} alt="cover" />
      <div className="cover_block">
        <img src={Rectangle16copy} alt="pink_feature" />
        <h2 className="cover_text">
          <span className="cover_Brand">THE BRAND</span>
          <br />
          <span className="cover_Brand2">OF LUXERIOUS</span>
          <span className="cover_Brand3">FASHION</span>
        </h2>
      </div>
    </section>
  );
}

export default MainPageCover;
