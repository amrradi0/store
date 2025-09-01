import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavorites, removeFromFavorites, setItemAdded, clearAddedItem } from '../Redux/appSlice';
import { 
  ShoppingCartIcon, 
  StarIcon, 
  HeartIcon, 
  CheckIcon, 
  MinusIcon, 
  PlusIcon,
  ArrowLeftIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

function ProductDetails() {
  const data = useLoaderData();
  const products = data.data;
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.appReducer.favorites);
  const addedItems = useSelector((state) => state.appReducer.addedItems);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);


  const product = products.find(p => p.id === parseInt(productId));
  

  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  useEffect(() => {

    setQuantity(1);
    setSelectedImage(0);
  }, [productId]);

  const isFavorite = (productId) => {
    return favorites.some(fav => fav.id === productId);
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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <StarIcon className="w-5 h-5 text-gray-300 absolute" />
          <StarIconSolid className="w-5 h-5 text-yellow-400 absolute" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }
    
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <StarIcon key={i} className="w-5 h-5 text-gray-300" />
      );
    }
    
    return stars;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h2>
          <button 
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        <button 
          onClick={() => navigate('/products')}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            

            <div className="flex space-x-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-3 flex items-center justify-center cursor-pointer border-2 border-blue-500">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
          


          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {product.description}
              </p>
                            


              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {renderStars(product.rating?.rate || 0)}
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 transition-colors">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 rounded-l-lg"
                  >
                    <MinusIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <span className="px-6 py-3 text-lg font-medium text-gray-900 dark:text-white min-w-[3rem] text-center transition-colors">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 rounded-r-lg"
                  >
                    <PlusIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => handleAddToCart(product)}
                disabled={addedItems.has(product.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  addedItems.has(product.id)
                    ? 'bg-green-500 dark:bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
                }`}
              >
                {addedItems.has(product.id) ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => toggleFavorite(product)}
                className={`p-4 rounded-xl font-medium transition-all duration-300 ${
                  isFavorite(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {isFavorite(product.id) ? (
                  <HeartIconSolid className="w-6 h-6" />
                ) : (
                  <HeartIcon className="w-6 h-6" />
                )}
              </button>
            </div>


            <div className="border-t dark:border-gray-700 pt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <TruckIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Free Shipping</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">On orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <ShieldCheckIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Secure Payment</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">100% secure payment</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <ArrowPathIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">30 Days Return</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Easy return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Products
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border dark:border-gray-700 cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700 aspect-square transition-colors">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(relatedProduct);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all duration-300 ${
                        isFavorite(relatedProduct.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {isFavorite(relatedProduct.id) ? (
                        <HeartIconSolid className="w-4 h-4" />
                      ) : (
                        <HeartIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedProduct.title}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="flex items-center">
                        {renderStars(relatedProduct.rating?.rate || 0)}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        ({relatedProduct.rating?.count || 0})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ${relatedProduct.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;