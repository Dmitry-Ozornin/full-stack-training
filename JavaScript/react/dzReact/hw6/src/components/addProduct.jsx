import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";

function AddProduct({handleInput, addProduct}) {
  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(false);
  const dispatch = useDispatch();

  const addProductList = (e) => {
    e.preventDefault();
    dispatch(addProduct({ nameProduct, description, price, availability }));
    setNameProduct("");
    setDescription("");
    setPrice("");
    setAvailability(false);
  };

  return (
    <form onSubmit={addProductList}>
      <input type="text" value={nameProduct} required placeholder="Введине название продукта" onChange={(e) => setNameProduct(e.target.value)} />
      <textarea placeholder="Введите описание продукта" onChange={(e) => setDescription(e.target.value)} value={description} />
      <input type="number" value={price} required placeholder="Введите цену " onChange={(e) => setPrice(e.target.value)} />
      <div>
        <input type="checkbox" name="cheaked" onChange={(e) => setAvailability(e.target.checked)} checked={availability} />
        <label htmlFor="cheaked"> Доступность</label>
      </div>

      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddProduct;
