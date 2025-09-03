import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "./ProductSlice";


export function EditProduct({ productId, onClose }) {
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({ id: productId, name, description, price, available })
    );
    onClose();
  };

  if (!product) return null;

  return (
    <div className="edit-product-form">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Наименование"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="textarea"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
          Доступен
        </label>
        <button className="button" type="submit">
          Изменить
        </button>
        <button className="button button-close" onClick={onClose}>
          Отмена
        </button>
      </form>
    </div>
  );
}