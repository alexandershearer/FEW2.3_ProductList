import './App.css';
import { useState } from 'react'
import data, { categoryUnique } from './data'
import ProductList from './ProductList'
import CategoryList from './CategoryList'
import Header from './Header'

function App() {
  const [category, setCategory] = useState()
  return (
    <div className="App">
      <Header title="Productive" productCount={data.length} categoryCount={categoryUnique.length} />
      <CategoryList
        category={category}
        onClick={newCategory => setCategory(newCategory)}
      />
      <ProductList category={category} />
    </div>
  );
}

export default App;


/*

- div.App <- Selected Category
  - Header
  - Category List
    - div.CategoryList
      -Button
      -Button
  - Product List
    - div
      - h2
      - p
      - p
      - small


*/
