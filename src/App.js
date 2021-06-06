import './App.css';
import data, { categoryUnique } from './data'
import ProductList from './ProductList'
import CategoryList from './CategoryList'

function App() {
  return (
    <div className="App">
      <h1>Productive</h1>
      <p>Product Count: {data.length}</p>
      <p>Unique Categories: {categoryUnique.length}</p>

      <CategoryList />

      <ProductList />
    </div>
  );
}

export default App;
