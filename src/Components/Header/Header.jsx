import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    
    <div className="bg-gradient-to-r from-[#FFE6FD] to-[#E0F8F5] py-16 px-4">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
          Deal Your <span className="text-purple-600">Products</span> <br /> In
          A <span className="text-purple-800 italic">Smart</span> Way!
        </h1>
        
        
        <p className="text-gray-600 text-lg">
          SmartDeals helps you to sell, resell and shop from trusted local
          sellers — all in one place.
        </p>

        
        <div className="flex justify-center mt-6">
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search for products, categories..." 
              className="input input-bordered w-full rounded-full pl-12 shadow-sm focus:border-purple-500"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
