import logo from './logo.svg';
import { Provider } from "react-redux";
import './App.css';
import { store } from './components/store/store';
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import { ListProduct } from './components/ListProduct';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Каталог продуктов</h1>
        <AddProduct/>
        <EditProduct/>
        <ListProduct/>
      </div>

    </Provider>
  );
}

export default App;
