import { useSelector } from "react-redux";

import Product from "./Product";

function ListProducts() {
  const productList = useSelector((state) => state.products.products);
  return (
    <ul>
      {productList.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ListProducts;
