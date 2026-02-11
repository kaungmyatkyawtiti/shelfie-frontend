interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden">

      {/* Image */}
      <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm group-hover:scale-110 transition">
          📦 Image
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name + Stock */}
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-800 truncate">
            {product.name}
          </h3>

          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
            {product.stock} left
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-blue-600">
          ${product.price}
        </p>

        {/* Add Button */}
        <button
          className="w-full mt-3 py-2 rounded-xl bg-slate-900 text-white font-medium flex items-center justify-center gap-2 hover:bg-black transition"
        >
          <span className="text-lg">+</span>
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

