import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/mainPage";
import BasketPage from "./pages/basketPage";
import NotFoundPage from "./pages/notFoundPage";
import CatalogPage from "./pages/catalogPage";
import ProductPage from "./pages/productPage";

function App() {
  const pages = {
    HOMEPAGE: "/",
    BASKET: "/basket",
    CATALOG: "/catalog",
    PRODUCT: "/product",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pages.HOMEPAGE} element={<MainPage />} />
        <Route path={pages.BASKET} element={<BasketPage />} />
        <Route path={pages.CATALOG} element={<CatalogPage />} />
        <Route path={pages.CATALOG} element={<CatalogPage />} />
        <Route path={pages.PRODUCT} element={<ProductPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
