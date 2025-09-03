import React, { useState } from 'react';
import { Phone, Star, Users, ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart, ArrowLeft } from 'lucide-react';
import  products from '../data/Products'

const ProductListing = ({ onProductClick }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => onProductClick(product)}
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    width="100px"
                    height="100px"
  className="w-32 h-32 object-cover mx-auto rounded-md"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      {product.discount}% OFF
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                      <span className="font-semibold">{product.rating}</span>
                      <Star className="ml-1" size={12} fill="white" />
                    </div>
                    <span className="text-gray-500 text-sm ml-2">({product.reviews.toLocaleString()})</span>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="text-sm text-green-600 font-medium">
                        {product.discount}% off
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2">{product.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductListing;