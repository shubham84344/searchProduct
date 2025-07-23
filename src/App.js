import './App.scss';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <p className='headingTitle'>Search Product</p>
      <div className='searchArea'>
        <input
          className='searchInput'
          type='text'
          placeholder='Search..'
        />
        <button className='SearchBtn'>Search</button>
      </div>
      <ProductList />
    </div>
  );
}

export default App;
