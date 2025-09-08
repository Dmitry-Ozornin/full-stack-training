import "./App.css";
import AddProduct from "./components/addProduct";
import ProductList from "./components/productsList";


function App() {
  return (
    <div  className="center">
      <AddProduct />
      <div className="listProducts">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
