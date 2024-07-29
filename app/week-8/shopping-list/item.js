

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div 
      className="flex flex-col p-2 border-b border-gray-700 cursor-pointer hover:bg-orange-700" 
      onClick={() => onSelect(name)}
    >
      <div>{name}</div>
      <div className="text-gray-400">Buy {quantity} in {category}</div>
    </div>
  );
}