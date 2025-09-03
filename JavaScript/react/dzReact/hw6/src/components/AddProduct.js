import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./ProductSlice";

export function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      dispatch(addProduct(name, description, price, available));
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Наименование"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
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
        Добавить продукт
      </button>
    </form>
  );
}