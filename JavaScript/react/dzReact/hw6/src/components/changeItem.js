import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheProduct } from "../store/productSlice";

function ChangeItem({ visibilaty, id }) {
  const [newProduct, setNewProduct] = useState("");
  const [newAbout, setNewAbout] = useState("");
  const [newPrice, setNewPrice] = useState("");
 
  console.log(id);
  const dispatch = useDispatch();

  const changeProductItem = (id,newProduct,newAbout,newPrice) => {
   
        dispatch(changeTheProduct({ id, newProduct, newAbout, newPrice}))

  
    visibilaty = "noVisibility";
  };

  return (
    <div className={`changeBtn ${visibilaty}`}>
      <input type="text" placeholder="Введите новое название или оставьте пустым(тогда изменения не будет)" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} />
      <textarea type="text" placeholder="Введите новое описание или оставьте пустым(тогда изменения не будет)" value={newAbout} onChange={(e) => setNewAbout(e.target.value)} />
      <input type="number" placeholder="Введите новую цену или оставьте пустым(тогда изменения не будет)" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
      <button onClick={() => changeProductItem(id, newProduct, newAbout, newPrice )}>изменить продукт</button>
    </div>
  );
}

export default ChangeItem;
