import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

function Banner() {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="relative bg-gray-900 dark:bg-gray-900 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 min-h-screen flex items-center overflow-hidden transition-colors duration-500">

      <div className="absolute inset-0">

        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-300 to-purple-400 dark:from-blue-400 dark:to-purple-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-40 dark:opacity-70 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-yellow-300 to-pink-400 dark:from-yellow-400 dark:to-pink-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-40 dark:opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 left-20 sm:left-40 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-pink-300 to-red-400 dark:from-pink-400 dark:to-red-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-40 dark:opacity-70 animate-blob animation-delay-4000"></div>
        

        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="hidden dark:block">
            <div className="grid grid-cols-12 h-full">
              {[...Array(144)].map((_, i) => (
                <div 
                  key={i}
                  className={`border border-cyan-500/20 ${i % 13 === 0 ? 'bg-cyan-500/5 animate-pulse' : ''} ${i % 17 === 0 ? 'bg-purple-500/5 animate-pulse' : ''}`}
                  style={{
                    animationDelay: `${(i * 100)}ms`,
                    animationDuration: '3s'
                  }}
                ></div>
              ))}
            </div>
          </div>
          

          <div className="block dark:hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
            }}></div>
          </div>
        </div>
        

        <div className="absolute inset-0 hidden dark:block">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-slide"
              style={{
                width: '200%',
                top: `${15 + i * 15}%`,
                left: '-50%',
                animationDelay: `${i * 2}s`,
                animationDuration: '8s'
              }}
            ></div>
          ))}
        </div>
        

        <div className="absolute inset-0 hidden dark:block">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-2 border-cyan-400/30 transform rotate-45 animate-float-hex"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '6s'
              }}
            >
              <div className="w-full h-full border border-purple-400/20 transform -rotate-45 animate-spin-slow"></div>
            </div>
          ))}
        </div>
        

        <div className="absolute inset-0 opacity-10 hidden dark:block">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#00ffff" opacity="0.3"/>
                <circle cx="80" cy="80" r="2" fill="#8b5cf6" opacity="0.3"/>
                <line x1="20" y1="20" x2="80" y2="20" stroke="#00ffff" strokeWidth="1" opacity="0.2"/>
                <line x1="20" y1="20" x2="20" y2="80" stroke="#8b5cf6" strokeWidth="1" opacity="0.2"/>
                <line x1="80" y1="80" x2="80" y2="20" stroke="#00ffff" strokeWidth="1" opacity="0.2"/>
                <line x1="80" y1="80" x2="20" y2="80" stroke="#8b5cf6" strokeWidth="1" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 dark:bg-white rounded-full opacity-20 animate-float-${i % 3 + 1} ${i >= 10 ? 'hidden sm:block' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      

      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/60 to-purple-100/40 dark:from-cyan-900/40 dark:via-gray-900/80 dark:to-purple-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-gray-900 dark:via-transparent dark:to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="text-gray-900 dark:text-white space-y-6 lg:space-y-8 text-center lg:text-left transition-colors duration-500">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Shop 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-orange-400">
                  Smart
                </span>
                <br />
                Live Better
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-blue-100 max-w-lg mx-auto lg:mx-0 transition-colors duration-500">
                Discover amazing products at unbeatable prices. Your perfect shopping experience starts here.
              </p>
            </div>
            

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToProducts}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-blue-600 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base whitespace-nowrap"
              >
                <ShoppingBagIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Shop Now
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link 
                to="/sign" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 dark:border-white text-blue-600 dark:text-white font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-white dark:hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
              >
                Join Us
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-blue-600/30 dark:border-blue-400/30">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-yellow-400">1M+</div>
                <div className="text-gray-600 dark:text-blue-200 text-xs sm:text-sm lg:text-base transition-colors duration-500">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-yellow-400">50K+</div>
                <div className="text-gray-600 dark:text-blue-200 text-xs sm:text-sm lg:text-base transition-colors duration-500">Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-yellow-400">99%</div>
                <div className="text-gray-600 dark:text-blue-200 text-xs sm:text-sm lg:text-base transition-colors duration-500">Satisfaction</div>
              </div>
            </div>
          </div>
          

          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative z-10">
              {/* Floating Cards */}
              <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl transform rotate-6 animate-pulse border dark:border-gray-600 transition-colors">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-lg lg:text-2xl">📱</span>
                </div>
                <div className="mt-2 sm:mt-3">
                  <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors text-xs sm:text-sm lg:text-base">Electronics</div>
                  <div className="text-green-600 dark:text-green-400 text-xs transition-colors">50% OFF</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl transform -rotate-6 animate-pulse border dark:border-gray-600 transition-colors">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-lg lg:text-2xl">👕</span>
                </div>
                <div className="mt-2 sm:mt-3">
                  <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors text-xs sm:text-sm lg:text-base">Fashion</div>
                  <div className="text-green-600 dark:text-green-400 text-xs transition-colors">New Arrivals</div>
                </div>
              </div>
              
              {/* Main Hero Circle */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-4xl sm:text-6xl lg:text-8xl animate-bounce">
                  🛒
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner