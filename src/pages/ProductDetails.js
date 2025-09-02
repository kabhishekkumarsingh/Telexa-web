import { useParams } from "react-router-dom";
import { Phone } from "lucide-react";
import products from "../data/Products";
import productDetails from "../data/ProductsDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <h2 className="p-10 text-center">Product not found</h2>;

  const details = productDetails[product.id];

  const handleBuyNow = () => {
    const message = `Hi, I'm interested in buying the ${product.name} (₹${product.discountedPrice}). Please provide more details about availability and delivery.`;
    const whatsappUrl = `https://wa.me/919128708006?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Multiple images */}
        <div>
          {details?.images?.map((img, i) => (
            <img key={i} src={img} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-3" />
          ))}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h1>
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-3xl font-bold text-blue-600">₹{product.discountedPrice}</span>
            {product.originalPrice > product.discountedPrice && (
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Extra Details */}
          {details && (
            <>
              <h3 className="font-semibold mb-2">Specifications</h3>
              <ul className="mb-4 list-disc list-inside text-gray-600">
                {details.specifications.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="mb-4 list-disc list-inside text-gray-600">
                {details.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </>
          )}

          <button
            onClick={handleBuyNow}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center"
          >
            <Phone className="mr-2" size={18} /> Buy Now via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
