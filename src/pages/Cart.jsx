import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { addToCart, removeFromCart, updateQuantity } from '../Redux/appSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const products = useSelector((state) => state.appReducer.products)
  const isAuthenticated = useSelector((state) => state.appReducer.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0)
  const totalItems = products.reduce((total, product) => total + product.quantity, 0)

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id))
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }))
    }
  }

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleContinueShopping = () => {

    navigate('/')
    setTimeout(() => {
      const productsSection = document.getElementById('products')
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleCheckout = () => {
    if (isAuthenticated) {
  
      navigate('/checkout', { 
        state: { 
          cartItems: products,
          totalPrice: totalPrice * 1.08
        }
      })
    } else {
  
      navigate('/sign', {
        state: {
          returnUrl: '/checkout',
          cartItems: products,
          totalPrice: totalPrice * 1.08,
          message: 'Please sign in to complete your purchase'
        }
      })
    }
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 transition-colors">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
            <ShoppingBagIcon className="w-16 h-16 text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors">
            Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
          </p>
          <button 
            onClick={handleContinueShopping}
            className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
            Shopping Cart
          </h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 border dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden transition-colors">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 transition-colors">
                      ${product.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 transition-colors">
                        <button
                          onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 rounded-l-lg"
                        >
                          <MinusIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>
                        <span className="px-4 py-2 text-lg font-medium text-gray-900 dark:text-white border-x border-gray-300 dark:border-gray-600 transition-colors">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 rounded-r-lg"
                        >
                          <PlusIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(product.id)}
                        className="flex items-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
                      >
                        <TrashIcon className="w-5 h-5" />
                        <span className="font-medium">Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors">Item Total</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-4 border dark:border-gray-700 transition-colors">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400 transition-colors">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 transition-colors">
                  <span>Shipping</span>
                  <span className="text-green-600 dark:text-green-400 font-medium transition-colors">Free</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 transition-colors">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t dark:border-gray-600 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white transition-colors">
                    <span>Total</span>
                    <span>${(totalPrice * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 mb-4 flex items-center justify-center space-x-2"
              >
                <span>{isAuthenticated ? 'Proceed to Checkout' : 'Sign In & Checkout'}</span>
                {!isAuthenticated && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                )}
              </button>

              <button 
                onClick={handleContinueShopping}
                className="block w-full text-center text-blue-600 dark:text-blue-400 font-medium py-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Continue Shopping
              </button>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t dark:border-gray-600">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 transition-colors">Promo Code</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart