import React, { useState } from 'react';
import './App.scss';
import ProductList from './components/ProductList';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <p className='headingTitle'>Search Product</p>
      <div className='searchArea'>
        <input
          className='searchInput'
          type='text'
          placeholder='Search..'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <ProductList search={search} />
    </div>
  );
}

export default App;
