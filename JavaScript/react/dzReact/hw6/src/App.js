import { useState } from "react";
import "./App.css";
import AddProduct from "./components/addProduct";
import ListProducts from "./components/ListProducts";
import { addProduct } from "./store/productSlice";
import { useDispatch } from "react-redux";

function App() {
  const [productsItem, setProductsItem] = useState([]);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addProduct({ text }));
  };

  return (
    <div className="App">
      <AddProduct  addProduct={addItem} />
      <ListProducts text={text}/>
    </div>
  );
}

export default App;
