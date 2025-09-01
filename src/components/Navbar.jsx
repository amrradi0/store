import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu, X, ShoppingCart, Heart, UserIcon, LogOut, Search } from "lucide-react";
import { logoutUser } from '../Redux/appSlice';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const cartItems = useSelector((state) => state.appReducer.products);
  const favorites = useSelector((state) => state.appReducer.favorites);
  const isAuthenticated = useSelector((state) => state.appReducer.isAuthenticated);
  const user = useSelector((state) => state.appReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (searchOpen) {
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {

      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = (e) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className=" fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`mx-4 px-6 py-3 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 border-cyan-400/30 shadow-2xl shadow-cyan-400/20' 
          : 'bg-gray-900/60 border-cyan-400/20 shadow-lg'
      }`}>
        <div className="flex items-center justify-between gap-8">
        <Link to="/" className="text-lg font-bold text-cyan-400 dark:text-cyan-300 transition-colors drop-shadow-lg whitespace-nowrap">
          🛒 ShopEase
        </Link>


        <ul className="hidden md:flex items-center space-x-6 text-white/90 font-medium">
          <li><Link to="/" className="hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">Home</Link></li>
          <li><button onClick={scrollToProducts} className="hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">Products</button></li>
          <li>
            <Link to="/cart" className="relative hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
              <ShoppingCart size={18} />
              <span className="whitespace-nowrap">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="relative hover:text-purple-400 transition-colors duration-300 flex items-center space-x-1">
              <Heart size={18} />
              <span className="whitespace-nowrap">Favorites</span>
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {favorites.length}
                </span>
              )}
            </Link>
          </li>
          <li>
            {!searchOpen ? (
              <button 
                onClick={() => setSearchOpen(true)}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                <Search size={18} />
              </button>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="px-3 py-1 rounded-l-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="px-3 py-1 bg-cyan-600 hover:bg-cyan-700 rounded-r-lg transition-colors"
                >
                  <Search size={16} />
                </button>
              </form>
            )}
          </li>
          <li><ThemeToggle /></li>
          {isAuthenticated ? (
            <li className="relative group">
              <div className="flex items-center space-x-3 text-white/90 cursor-pointer bg-gray-800/50 hover:bg-gray-800/70 rounded-xl px-3 py-2 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <UserIcon size={16} className="text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="font-medium text-sm">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-400 whitespace-nowrap">View Profile</p>
                </div>
              </div>
              

              <div className="absolute right-0 top-full mt-2 w-56 bg-gray-900/95 backdrop-blur-lg border border-cyan-400/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 border-b border-cyan-400/20">
                  <p className="text-white font-medium text-sm">{user?.name}</p>
                  <p className="text-gray-400 text-xs">{user?.email}</p>
                </div>
                <div className="p-2">
                  <Link
                    to="/profile"
                    className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 hover:bg-gray-700/50 rounded-lg transition-colors text-sm"
                  >
                    <UserIcon size={16} />
                    <span>My Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 px-3 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm mt-1"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </li>
          ) : (
            <li><Link to="/sign" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap">Login</Link></li>
          )}
        </ul>


        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          {!searchOpen ? (
            <button 
              onClick={() => setSearchOpen(true)}
              className="text-white/90 hover:text-cyan-400 transition-colors"
            >
              <Search size={20} />
            </button>
          ) : (
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-2 py-1 rounded-l-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
                autoFocus
              />
              <button 
                type="submit"
                className="px-2 py-1 bg-cyan-600 hover:bg-cyan-700 rounded-r-lg transition-colors"
              >
                <Search size={16} />
              </button>
            </form>
          )}
          <button className="text-white/90 hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 px-4 py-4 rounded-2xl bg-gray-900/95 backdrop-blur-lg border border-cyan-400/30 shadow-2xl">
          <ul className="space-y-3 text-white/90 font-medium">
            <li><Link to="/" onClick={toggleMenu} className="block py-2 hover:text-cyan-400 transition-colors">Home</Link></li>
            <li><button onClick={(e) => { scrollToProducts(e); toggleMenu(); }} className="block py-2 hover:text-cyan-400 transition-colors w-full text-left">Products</button></li>
            <li>
              <Link to="/cart" onClick={toggleMenu} className="relative hover:text-cyan-400 transition-colors flex items-center space-x-2 py-2">
                <ShoppingCart size={18} />
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-auto">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/favorites" onClick={toggleMenu} className="relative hover:text-purple-400 transition-colors flex items-center space-x-2 py-2">
                <Heart size={18} />
                <span>Favorites</span>
                {favorites.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-auto">
                    {favorites.length}
                  </span>
                )}
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="border-t border-cyan-400/20 pt-3 mt-3">
                  <div className="flex items-center space-x-3 px-2 py-2 text-white/90">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <UserIcon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user?.name}</p>
                      <p className="text-gray-400 text-xs">{user?.email}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="w-full flex items-center space-x-2 px-2 py-2 text-gray-300 hover:bg-gray-700/50 rounded-lg transition-colors text-sm"
                  >
                    <UserIcon size={16} />
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 px-2 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/sign" onClick={toggleMenu} className="block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 py-2 rounded-xl transition-all text-center shadow-lg mt-2">Login</Link></li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;