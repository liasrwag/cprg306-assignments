

export default function Item({ name, quantity, category }) {
    return (
      <div className="flex flex-col p-2 border-b border-gray-700">
        <div>{name}</div>
        <div className="text-gray-400">Buy {quantity} in {category}</div>
      </div>
    );
  }
