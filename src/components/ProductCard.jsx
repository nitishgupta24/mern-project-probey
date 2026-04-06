import { useState } from "react";

export default function ProductCard({ name, price, mrp, discount, image }) {
  //                                                                  ↑ emoji hatao, image likho

  const [count, setCount] = useState(0);

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      {" "}
      {/* ← yeh missing tha */}
      <div className="h-40 bg-gray-50 flex items-center justify-center relative">
        <img
          src={image}
          alt={name}
          className="h-36 w-full object-contain p-2"
        />

        {count === 0 ? (
          <button
            onClick={() => setCount(1)}
            className="absolute bottom-2 right-2 border border-pink-500 text-pink-500 text-xs px-3 py-1 rounded-lg bg-white font-medium"
          >
            ADD
          </button>
        ) : (
          <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-purple-700 text-white text-xs px-2 py-1 rounded-lg">
            <button onClick={() => setCount((c) => c - 1)}>−</button>
            <span>{count}</span>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        )}
      </div>
      <div className="p-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-purple-700 text-white text-xs px-2 py-0.5 rounded">
            ₹{price}
          </span>
          <span className="text-xs text-gray-400 line-through">₹{mrp}</span>
        </div>
        <div className="text-xs text-green-600 font-medium">
          ₹{discount} OFF
        </div>
        <div className="text-xs text-gray-500 mt-1 leading-tight">{name}</div>
      </div>
    </div>
  );
}
