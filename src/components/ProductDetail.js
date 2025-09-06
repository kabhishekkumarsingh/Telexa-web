import React, { useState } from 'react';
import { Phone, Star, Users, ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart, ArrowLeft } from 'lucide-react';
import productDetails from '../data/ProductsDetails'
const ProductDetail = ({ product, onBackClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const details = productDetails[product.id];

  const handleBuyNow = (product) => {
    const message = `Hi, I'm interested in buying the ${product.name} (₹${product.price}). Please provide more details about availability and delivery.`;
    const whatsappUrl = `https://wa.me/919128708006?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    if (details && details.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % details.images.length);
    }
  };

  const prevImage = () => {
    if (details && details.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + details.images.length) % details.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBackClick}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Images */}
          <div>
            <div className="sticky top-24">
              {details ? (
                <div>
                  {/* Main Image */}
                  <div className="relative mb-6">
                    <img 
                      src={details.images[currentImageIndex]} 
                      alt={product.name}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-lg border"
                    />
                    {details.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                   
                  </div>

                  {/* Thumbnail Images */}
                  {details.images.length > 1 && (
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {details.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 flex-shrink-0 ${
                            currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg border"
                />
              )}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div>
            <div className="space-y-8">
              {/* Product Title and Rating */}
              <div>
                <h1 className="text-3xl font-medium text-gray-900 mb-3">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded text-sm">
                    <span className="font-semibold">{product.rating}</span>
                    <Star className="ml-1" size={14} fill="white" />
                  </div>
                  <span className="text-gray-600">
                    {product.reviews.toLocaleString()} Ratings & Reviews
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-4xl font-medium text-gray-900">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="text-xl text-green-600 font-medium">{product.discount}% off</span>
                    </>
                  )}
                </div>
                {product.originalPrice > product.price && (
                  <div className="text-lg text-green-600 font-medium mb-4">
                    You save ₹{(product.originalPrice - product.price).toLocaleString()}!
                  </div>
                )}

                {/* Availability */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                
                  <button
                    onClick={() => handleBuyNow(product)}
                    disabled={!product.inStock}
                    className={`flex-1 px-6 py-4 font-semibold rounded-lg transition-colors flex items-center justify-center ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Phone className="mr-2" size={20} />
                    {product.inStock ? 'Buy Now' : 'Out of Stock'}
                  </button>
                </div>
              </div>

              {/* Product Description */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Details</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {details?.fullDescription || product.shortDescription}
                </p>
              </div>

              {/* Key Highlights */}
              {details?.highlights && (
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                  <ul className="space-y-3">
                    {details.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {details?.specifications && (
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Specifications</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {details.specifications.map((spec, index) => {
                      const [key, value] = spec.split(': ');
                      return (
                        <div key={index} className="flex border-b border-gray-100 pb-2">
                          <span className="text-gray-600 w-40 flex-shrink-0">{key}</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* What's in the Box */}
              {details?.includes && (
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">What's in the Box</h3>
                  <ul className="space-y-2">
                    {details.includes.map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-800 mr-3">Warranty:</span>
                      <span className="text-gray-700">{details.warranty}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;