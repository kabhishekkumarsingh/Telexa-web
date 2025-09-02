import React, { useState } from 'react';
import { Phone, Info, Star, Users, X } from 'lucide-react';
import products from '../data/Products'; // Assuming you have a products data file
import productDetails from '../data/ProductsDetails'; // Assuming you have a product details data file
const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleBuyNow = (product) => {
    const message = `Hi, I'm interested in buying the ${product.name} (₹${product.discountedPrice}). Please provide more details about availability and delivery.`;
    const whatsappUrl = `https://wa.me/919128708006?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Telexa <span className="text-blue-400">Products</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional power management solutions for all your automation needs
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-2" size={20} />
                <span className="text-lg">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="text-green-400 mr-2" size={20} />
                <span className="text-lg">50,000+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {product.discount}% OFF
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 bg-gray-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                  
                  <div className="mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-blue-600">₹{product.discountedPrice.toLocaleString()}</span>
                      {product.originalPrice > product.discountedPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    {product.originalPrice > product.discountedPrice && (
                      <div className="text-xs text-green-600 font-semibold">
                        You save ₹{(product.originalPrice - product.discountedPrice).toLocaleString()}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-xs mb-4 line-clamp-2 flex-1">{product.description}</p>
                  
                  <div className="flex space-x-2 mt-auto">
                    <button
                      onClick={() => handleBuyNow(product)}
                      disabled={!product.inStock}
                      className={`flex-1 flex items-center justify-center px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        product.inStock
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Phone className="mr-1" size={14} />
                      {product.inStock ? 'Buy Now' : 'Out of Stock'}
                    </button>
                    
                    <button
                      onClick={() => handleShowDetails(product)}
                      className="px-3 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Info size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
                <button
                  onClick={closeDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-blue-600">₹{selectedProduct.discountedPrice.toLocaleString()}</span>
                      {selectedProduct.originalPrice > selectedProduct.discountedPrice && (
                        <span className="text-xl text-gray-500 line-through">₹{selectedProduct.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <div className="text-lg text-green-600 font-semibold">
                      You save ₹{(selectedProduct.originalPrice - selectedProduct.discountedPrice).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Description</h3>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>

                  {productDetails[selectedProduct.id] && (
                    <>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                        <ul className="space-y-2">
                          {productDetails[selectedProduct.id].specifications.map((spec, index) => (
                            <li key={index} className="text-gray-600 text-sm">• {spec}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Features</h3>
                        <ul className="space-y-2">
                          {productDetails[selectedProduct.id].features.map((feature, index) => (
                            <li key={index} className="text-gray-600 text-sm">• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Warranty</h4>
                          <p className="text-gray-600 text-sm">{productDetails[selectedProduct.id].warranty}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">What's Included</h4>
                          <ul className="text-gray-600 text-sm space-y-1">
                            {productDetails[selectedProduct.id].includes.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleBuyNow(selectedProduct)}
                      disabled={!selectedProduct.inStock}
                      className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                        selectedProduct.inStock
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Phone className="mr-2" size={18} />
                      {selectedProduct.inStock ? 'Buy Now via WhatsApp' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;