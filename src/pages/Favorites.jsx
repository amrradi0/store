import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { removeFromFavorites, addToCart } from '../Redux/appSlice';

function Favorites() {
  const favorites = useSelector((state) => state.appReducer.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    }));
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 transition-colors">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
            <HeartIcon className="w-16 h-16 text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            No favorites yet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors">
            Start adding products to your favorites by clicking the heart icon on any product!
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
            My Favorites
          </h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">
            {favorites.length} {favorites.length === 1 ? 'item' : 'items'} in your favorites
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
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
                

                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => handleRemoveFromFavorites(product.id)}
                    className="p-2 bg-red-500 dark:bg-red-600 text-white rounded-full shadow-lg hover:bg-red-600 dark:hover:bg-red-700 transition-colors"
                  >
                    <HeartIconSolid className="w-5 h-5" />
                  </button>
                </div>
              </div>


              <div className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                    ${product.price}
                  </span>
                </div>


                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button
                    onClick={() => handleRemoveFromFavorites(product.id)}
                    className="flex items-center justify-center px-3 py-2 border border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors duration-200"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;