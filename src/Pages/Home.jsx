import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";

import { products } from "../data/mockData"; // ← data bahar se aaya
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <CategoryNav />
      <Banner />
      <div className="px-8 py-5">
        {/* Laundry Care Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Laundry Care</h2>
          <span className="text-sm text-pink-600 font-medium cursor-pointer">
            See All →
          </span>
        </div>
        <div className="grid grid-cols-8 gap-3 mb-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* Rice Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Rice</h2>
          <span className="text-sm text-pink-600 font-medium cursor-pointer">
            See All →
          </span>
        </div>
        <div className="grid grid-cols-8 gap-3 mb-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
        {/*wheat Section */}
        {/* Rice Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Wheat</h2>
          <span className="text-sm text-pink-600 font-medium cursor-pointer">
            See All →
          </span>
        </div>
        <div className="grid grid-cols-8 gap-3 mb-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
