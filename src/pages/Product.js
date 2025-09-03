import {useState} from 'react'
import ProductListing from '../components/ProductListing'
import ProductDetail from '../components/ProductDetail'


const ProductPage = () => {
  const [currentView, setCurrentView] = useState('listing');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleBackToListing = () => {
    setCurrentView('listing');
    setSelectedProduct(null);
  };

  if (currentView === 'detail' && selectedProduct) {
    return <ProductDetail product={selectedProduct} onBackClick={handleBackToListing} />;
  }

  return <ProductListing onProductClick={handleProductClick} />;
};

export default ProductPage;