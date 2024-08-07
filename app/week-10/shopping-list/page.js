"use client";

import React, { useEffect, useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    if (user) {
      const shoppingListItems = await getItems(user.uid);
      setItems(shoppingListItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    if (user) {
      const newItemId = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { ...item, id: newItemId }]);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        You need to be signed in to view this page.
      </div>
    );
  }

  return (
    <main className="max-w-xl mx-auto p-4 bg-slate-950 text-white flex space-x-4">
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
      <MealIdeas />
    </main>
  );
};

export default ShoppingListPage;