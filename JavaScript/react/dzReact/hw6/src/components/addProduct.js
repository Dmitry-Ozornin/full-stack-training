import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../store/productSlice";
function AddProduct() {
  const [product, setProduct] = useState("");
  const [about, setAbout] = useState("");
  const [price, setPrice] = useState("");
  const [aval, setAval] = useState(false);

  const dispatch = useDispatch();
  const addItems = (e) => {
    e.preventDefault();
    dispatch(addProducts({ product, about, price, aval }));
    setProduct("");
    setAbout("");
    setPrice("");
    setAval(false);
  };

  return (
    <form onSubmit={addItems} className="addForm">
      <input type="text" placeholder="Введите название продукта" required value={product} onChange={(e) => setProduct(e.target.value)} />
      <textarea type="text" required placeholder="Введите описание продукта" value={about} onChange={(e) => setAbout(e.target.value)} />
      <input type="number" required placeholder="Введите цену продукта" value={price} onChange={(e) => setPrice(e.target.value)} min={1}/>
      <label>
        <input type="checkbox" checked={aval} onChange={(e) => setAval(e.target.checked)} /> Доступность
      </label>

      <button type="submit">Добавить продукт</button>
    </form>
  );
}

export default AddProduct;
