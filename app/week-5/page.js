import ItemList from './item-list';

export default function Page() { 
    
    return (
        <main className="max-w-xl mx-auto p-4 bg-slate-950 text-white">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <ItemList />
        </main>
  );    
};