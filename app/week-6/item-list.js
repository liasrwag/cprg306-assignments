"use client";
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

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
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;