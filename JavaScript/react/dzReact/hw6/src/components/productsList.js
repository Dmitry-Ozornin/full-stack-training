import ProductItem from "./productItem";
import { useSelector } from "react-redux";

function ProductList() {
  const productsItems = useSelector((state) => state.products.products);
  return (
    <ul className="cardsBox">
      {productsItems.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;

