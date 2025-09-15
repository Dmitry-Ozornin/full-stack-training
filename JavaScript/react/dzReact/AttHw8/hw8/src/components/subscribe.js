import subscribe_foto from "../img/subscribe_foto.svg";

function Subscribe() {
  return (
    <section className="subscribe center">
      <div className="subscribe_block">
        <img src={subscribe_foto} alt="foto" />
        <p className="subscribe_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
      </div>
      <article className="newsletter_block">
        <p className="newsletter_header">
          <span className="newsletter_h1">SUBSCRIBE</span>
          <br />
          <span className="newsletter_text">FOR OUR NEWLETTER AND PROMOTION</span>
        </p>

        <form  className="newsletter_form">
          <input type="email" name="Contact-Email" required placeholder="Enter Your Email" className="email_input" style={{display:'block'}} />
          <button type="submit" className="button_newsletter clicking">
            Subscribe
          </button>
        </form>
      </article>
    </section>
  );
}

export default Subscribe;
