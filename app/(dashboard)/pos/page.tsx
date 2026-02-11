"use client";

export default function POSPageUI() {
  return (
    <div className="flex">
      {/* LEFT SIDE: Products */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">POS Products</h1>

        <div className="grid grid-cols-3 gap-4">
          {/* Product Card */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Product"
                className="w-full h-32 object-cover"
              />

              <div className="p-3 flex justify-between text-sm">
                <span className="truncate font-medium">
                  Product Name {i}
                </span>
                <span className="font-semibold">$0.99</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Cart Panel */}
      <div className="w-[400px] bg-white shadow-xl flex flex-col p-6">
        <h2 className="text-xl font-bold mb-4">Cart</h2>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto space-y-3">
          {/* Item Row */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-xl"
            >
              <div>
                <p className="font-medium">Cart Item {i}</p>
                <p className="text-sm text-gray-500">$0.99 × 2</p>
              </div>

              {/* Quantity Buttons */}
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-lg bg-gray-700 text-white">
                  -
                </button>
                <button className="px-3 py-1 rounded-lg bg-gray-700 text-white">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="border-t pt-4 mt-4 space-y-4">
          {/* Total */}
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>$12.45</span>
          </div>

          {/* Cash Input */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Cash
            </label>
            <input
              type="text"
              placeholder="Enter cash amount..."
              className="w-full rounded-xl border px-3 py-2"
            />
          </div>

          {/* Change */}
          <div className="font-semibold">
            Change:{" "}
            <span className="text-green-600">$2.55</span>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 rounded-2xl text-white bg-cyan-500">
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
}

