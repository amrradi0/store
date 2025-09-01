import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, ShoppingBagIcon, HeartIcon, MapPinIcon, CreditCardIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { logoutUser } from '../Redux/appSlice';

function Profile() {
  const user = useSelector((state) => state.appReducer.user);
  const cartItems = useSelector((state) => state.appReducer.products);
  const favorites = useSelector((state) => state.appReducer.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalFavorites = favorites.length;

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  if (!user) {
    return (
      <div className=" min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please sign in to view your profile
          </h2>
          <button 
            onClick={() => navigate('/sign')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Profile</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Manage your account settings and preferences
            </p>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-4 md:mt-0"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <UserIcon className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{user.email}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Member since {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <button
                onClick={() => navigate('/sign')}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg transition-colors"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          <div className="flex-1 min-w-[300px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <ShoppingBagIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Cart Items</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{totalItems}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
                <div className="flex items-center">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                    <HeartIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Favorites</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{totalFavorites}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CreditCardIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Orders</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Settings</h3>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <Link to="/orders" className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <ShoppingBagIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">My Orders</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        View your order history and track shipments
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                
                <Link to="/addresses" className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <MapPinIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">Addresses</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Manage your shipping and billing addresses
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                
                <Link to="/payment-methods" className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <CreditCardIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">Payment Methods</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Manage your payment methods and preferences
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;