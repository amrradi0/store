import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavorites, removeFromFavorites, setItemAdded, clearAddedItem } from '../Redux/appSlice';
import { ShoppingCartIcon, StarIcon, EyeIcon, HeartIcon, CheckIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

function Products() {
  const data = useLoaderData();
  const products = data.data;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.appReducer.favorites);
  const addedItems = useSelector((state) => state.appReducer.addedItems);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';
    setSearchQuery(query);
  }, [location.search]);

  const categories = ['all', ...new Set(products.map(product => product.category))];
  

  const categoryFilteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);


  const filteredProducts = searchQuery
    ? categoryFilteredProducts.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoryFilteredProducts;

  const isFavorite = (productId) => {
    return favorites.some(fav => fav.id === productId);
  };

  const getQuantity = (productId) => {
    return quantities[productId] || 1;
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
    }
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }));
    }
  };

  const handleAddToCart = (product) => {
    const quantity = getQuantity(product.id);
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: quantity,
      })
    );
    

    dispatch(setItemAdded(product.id));
    

    setTimeout(() => {
      dispatch(clearAddedItem(product.id));
    }, 2000);
  };


  useEffect(() => {
    setQuantities({});
  }, [selectedCategory]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIconSolid key={i} className="w-4 h-4 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <StarIcon className="w-4 h-4 text-gray-300 absolute" />
          <StarIconSolid className="w-4 h-4 text-yellow-400 absolute" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }
    
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <StarIcon key={i} className="w-4 h-4 text-gray-300" />
      );
    }
    
    return stars;
  };

  return (
    <div id="products" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Products'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            {searchQuery 
              ? `Found ${filteredProducts.length} product(s) matching your search` 
              : 'Discover our amazing collection of high-quality products at unbeatable prices'}
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border dark:border-gray-700"
            >

              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700 aspect-square transition-colors">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <EyeIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                      onClick={() => toggleFavorite(product)}
                      className={`p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
                        isFavorite(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {isFavorite(product.id) ? (
                        <HeartIconSolid className="w-5 h-5" />
                      ) : (
                        <HeartIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 transition-colors">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating?.rate || 0)}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                    ({product.rating?.count || 0})
                  </span>
                </div>

                {/* Price and Add to Cart */}
                <div className="space-y-4">
                  {/* Price */}
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                      ${product.price}
                    </span>
                  </div>
                  
                  {/* Quantity Selector */}
                  <div className="flex justify-center">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 transition-colors">
                      <button
                        onClick={() => updateQuantity(product.id, getQuantity(product.id) - 1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 rounded-l-lg"
                      >
                        <MinusIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                      <span className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-white min-w-[3rem] text-center transition-colors">
                        {getQuantity(product.id)}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, getQuantity(product.id) + 1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 rounded-r-lg"
                      >
                        <PlusIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addedItems.has(product.id)}
                    className={`group/btn w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      addedItems.has(product.id)
                        ? 'bg-green-500 dark:bg-green-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
                    }`}
                  >
                    {addedItems.has(product.id) ? (
                      <>
                        <CheckIcon className="w-5 h-5" />
                        <span className="hidden md:inline">Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCartIcon className="w-5 h-5" />
                        <span className="hidden md:inline">Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
              {searchQuery ? 'No products found' : 'No products found'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">
              {searchQuery 
                ? `No products match your search for "${searchQuery}". Try different keywords.` 
                : 'Try selecting a different category'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;