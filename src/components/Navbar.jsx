import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center gap-5 px-8 py-3 bg-white border-b sticky top-0 z-50">
      <div className="text-xl font-bold text-purple-700 border-2 border-purple-700 px-3 py-0.5 rounded-md">
        zepto
      </div>

      <div className="text-sm text-gray-500 cursor-pointer whitespace-nowrap">
        Select Location ▾
      </div>

      <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
        <span className="text-gray-400">🔍</span>
        <input
          type="text"
          placeholder='Search for "kurkure"'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="text-center cursor-pointer text-sm">
          <div>👤</div>
          <div>Login</div>
        </div>
        <div className="text-center cursor-pointer text-sm">
          <div>🛒</div>
          <div>Cart</div>
        </div>
      </div>
    </nav>
  );
}
