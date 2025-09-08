import { useState } from "react";
import { deleteProduct, changeAval } from "../store/productSlice";
import { useDispatch } from "react-redux";
import ChangeItem from "./changeItem";
function ProductItem({ id, product, about, price, aval }) {
  const [visibilaty, setVisibilaty] = useState("noVisibility");

  const dispatch = useDispatch();
  const changeClick = () => {
    if (visibilaty === "noVisibility") {
      setVisibilaty("visibility");
    } else {
      setVisibilaty("noVisibility");
    }
  };

  return (
    <li key={id} className="card">
      <h2>{product}</h2>
      <p>{about}</p>
      <p>Стоимость {price}</p>
      <p>{aval ? "Доступен" : "Не доступен"}</p>
      <div className="btn">
        <button onClick={() => dispatch(deleteProduct({ id }))}>Удалить</button>
        <button onClick={() => dispatch(changeAval({ id }))}>Сменить доступность на {aval ? "Не доступен" : "Доступен"}</button>
        <button onClick={changeClick}> Изменить</button>
      </div>

      <ChangeItem visibilaty={visibilaty} id={id} />
    </li>
  );
}

export default ProductItem;
