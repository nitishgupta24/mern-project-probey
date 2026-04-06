export default function CategoryNav() {
  const cats = [
    "All",
    "Cafe",
    "Home",
    "Toys",
    "Fresh",
    "Electronics",
    "Mobiles",
    "Beauty",
    "Fashion",
  ];

  return (
    <div className="flex gap-1 px-8 bg-white border-b overflow-x-auto">
      {cats.map((cat, i) => (
        <div
          key={cat}
          className={`px-4 py-3 text-sm cursor-pointer whitespace-nowrap border-b-2 ${i === 0 ? "border-purple-700 text-purple-700 font-medium" : "border-transparent text-gray-500"}`}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
