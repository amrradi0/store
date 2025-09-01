import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

function Banner() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Shop 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Smart
                </span>
                <br />
                Live Better
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-lg">
                Discover amazing products at unbeatable prices. Your perfect shopping experience starts here.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/" 
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Shop Now
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/sign" 
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Join Us
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-400/30">
              <div>
                <div className="text-3xl font-bold text-yellow-400">1M+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-blue-200">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">99%</div>
                <div className="text-blue-200">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl transform rotate-6 animate-pulse">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-gray-800">Electronics</div>
                  <div className="text-green-600 text-sm">50% OFF</div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl transform -rotate-6 animate-pulse">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👕</span>
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-gray-800">Fashion</div>
                  <div className="text-green-600 text-sm">New Arrivals</div>
                </div>
              </div>
              
              {/* Main Hero Circle */}
              <div className="w-80 h-80 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-8xl animate-bounce">
                  🛒
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-75">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner