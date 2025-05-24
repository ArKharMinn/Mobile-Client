import React, { useState } from 'react';

const Category = ({ category, getCategoryData }) => {
   const [currentCategoryId, setCurrentCategoryId] = useState('');

  return (
    <div className="sticky top-16 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <nav aria-label="Product categories">
          <ul className="flex space-x-1 overflow-x-auto py-3 hide-scrollbar">
            <li>
              <button
                onClick={() => getCategoryData("")}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentCategoryId === ""
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                All Products
              </button>
            </li>
            
            {category.length > 0 ? (
              category.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {getCategoryData(cat.id)
                        setCurrentCategoryId(cat.id)}
                    }
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      currentCategoryId === cat.id
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    
                  >
                    {cat.name}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500">
                No categories available
              </li>
            )}
          </ul>
        </nav>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Category;