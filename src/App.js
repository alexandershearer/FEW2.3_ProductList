import './App.css';
import data, { categoryUnique } from './data'
import ProductList from './ProductList'
import CategoryList from './CategoryList'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header title="Productive" productCount={data.length} categoryCount={categoryUnique.length} />

      <CategoryList />

      <ProductList />
    </div>
  );
}

export default App;
