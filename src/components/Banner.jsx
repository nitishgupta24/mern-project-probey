export default function Banner() {
  return (
    <div className="grid grid-cols-2 gap-4 px-8 py-5">
      {/* Left Banner */}
      <div className="bg-purple-50 rounded-xl p-9">
        <div className="flex gap-8">
          <div>
            <div className="text-2xl font-bold text-purple-800">₹0 FEES</div>
          </div>
          <div className="border-l border-purple-200 pl-6">
            <div className="text-sm font-bold text-purple-800">EVERYDAY</div>
            <div className="text-sm font-bold text-purple-800">
              LOWEST PRICES
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4 text-xs text-purple-700">
          <span>✅ ₹0 Handling</span>
          <span>✅ ₹0 Delivery</span>
          <span>✅ ₹0 Rain Fee</span>
        </div>
        <div className="text-xs text-purple-400 mt-5">
          *T&C Apply. Above specific minimum order value
        </div>
      </div>

      {/* Right Banner */}
      <div className="bg-teal-50 rounded-xl p-5 flex justify-between items-center">
        <div>
          <div className="text-xl font-bold text-teal-800">
            ₹0 Convenience Fee
          </div>
          <div className="text-sm text-teal-600 mt-1">
            Delivered in minutes!
          </div>
          <button className="mt-3 bg-gray-900 text-white text-xs px-4 py-2 rounded-full">
            Order now →
          </button>
        </div>
        <div className="text-6xl">🚚</div>
      </div>
    </div>
  );
}
