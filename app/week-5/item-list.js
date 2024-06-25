"use client"
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  let items = [...itemsData];

  // Sorting logic
  if (sortBy === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <p>Sort by:</p>
      <div className="flex space-x-4 mb-5">
        <button 
          className={`bg-orange-500 p-1 m-2 w-28 ${sortBy === 'name' && 'bg-orange-700'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button 
          className={`bg-orange-500 p-1 m-2 w-28 ${sortBy === 'category' && 'bg-orange-700'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <ul className="p-2 m-4 bg-slate-900 max-w-sm">
        {items.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
