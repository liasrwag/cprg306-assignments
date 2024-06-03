import ItemList from './item-list';

export default function Page() { 
    
    return (
        <main className="max-w-xl mx-auto p-4 bg-black text-white">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <ItemList />
        </main>
  );
};