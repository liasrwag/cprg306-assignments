"use client";
import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-900 p-5 shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            id="name" 
            type="text" 
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500"
          />
        </div>
        <div className="flex space-x-2">
          <input 
            id="quantity" 
            type="number" 
            min="1" 
            max="99" 
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-1/4 p-2 border border-gray-300 rounded bg-white text-black"
          />
          <select 
            id="category" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          +
        </button>
      </form>
    </div>
  );
}