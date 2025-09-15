import Header from "../components/header";
import MainPageCover from "../components/mainPageCover";
import MainPageItems from "../components/mainPageItems";
import MainPageNavForCatalog from "../components/mainPageNavForCatalog";
import { Link } from "react-router";

import Adventages from "../components/adventages";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";

function MainPage() {
  return (
    <>
      <Header />
      <MainPageCover />
      <MainPageNavForCatalog />
      <MainPageItems />
      <Link to="/catalog" className="button_all_products" state={{page: "CATALOG"}}>
        Browse All Product
      </Link>
      <Adventages />
      <Subscribe />
      <Footer />
    </>
  );
}

export default MainPage;
