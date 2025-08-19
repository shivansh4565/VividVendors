import React, { useState, useMemo } from "react";

const CollectionPlant = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCareLevel, setSelectedCareLevel] = useState("");
  const [selectedLight, setSelectedLight] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("Price: Low to High");

  const careLevels = ["Easy", "Medium", "Hard"];
  const lightRequirements = ["Low Light", "Medium Light", "Bright Light", "Direct Sunlight"];
  const priceRanges = ["Under $20", "$20 - $50", "$50 - $100", "Over $100"];

  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 45.99,
      image: "https://picsum.photos/300/400?random=41",
      category: "Indoor Plants",
      size: "Medium",
      careLevel: "Easy",
      light: "Medium Light",
      description: "Large, split-leaf philodendron perfect for statement pieces",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 24.99,
      image: "https://picsum.photos/300/400?random=42",
      category: "Indoor Plants",
      size: "Small",
      careLevel: "Easy",
      light: "Low Light",
      description: "Low-maintenance plant that purifies air",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: 89.99,
      image: "https://picsum.photos/300/400?random=43",
      category: "Indoor Plants",
      size: "Large",
      careLevel: "Medium",
      light: "Bright Light",
      description: "Trendy tree-like plant for modern interiors",
    },
    {
      id: 4,
      name: "Pothos Golden",
      price: 19.99,
      image: "https://picsum.photos/300/400?random=44",
      category: "Indoor Plants",
      size: "Small",
      careLevel: "Easy",
      light: "Low Light",
      description: "Trailing vine perfect for hanging baskets",
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 34.99,
      image: "https://picsum.photos/300/400?random=45",
      category: "Indoor Plants",
      size: "Medium",
      careLevel: "Easy",
      light: "Low Light",
      description: "Drought-tolerant plant with glossy leaves",
    },
    {
      id: 6,
      name: "Succulent Collection",
      price: 22.99,
      image: "https://picsum.photos/300/400?random=46",
      category: "Indoor Plants",
      size: "Small",
      careLevel: "Easy",
      light: "Bright Light",
      description: "Set of 3 drought-resistant succulents",
    },
    {
      id: 7,
      name: "Orchid Phalaenopsis",
      price: 49.99,
      image: "https://picsum.photos/300/400?random=47",
      category: "Indoor Plants",
      size: "Medium",
      careLevel: "Medium",
      light: "Medium Light",
      description: "Elegant flowering orchid for special occasions",
    },
    {
      id: 8,
      name: "Peace Lily",
      price: 32.99,
      image: "https://picsum.photos/300/400?random=48",
      category: "Indoor Plants",
      size: "Medium",
      careLevel: "Easy",
      light: "Low Light",
      description: "Beautiful flowering plant that purifies indoor air",
    },
    {
      id: 9,
      name: "Aloe Vera",
      price: 18.99,
      image: "https://picsum.photos/300/400?random=49",
      category: "Indoor Plants",
      size: "Small",
      careLevel: "Easy",
      light: "Bright Light",
      description: "Medicinal succulent perfect for sunny windowsills",
    },
    {
      id: 10,
      name: "Chinese Evergreen",
      price: 28.99,
      image: "https://picsum.photos/300/400?random=50",
      category: "Indoor Plants",
      size: "Medium",
      careLevel: "Easy",
      light: "Low Light",
      description: "Tolerant plant with beautiful variegated leaves",
    },
    {
      id: 11,
      name: "Spider Plant",
      price: 16.99,
      image: "https://picsum.photos/300/400?random=51",
      category: "Indoor Plants",
      size: "Small",
      careLevel: "Easy",
      light: "Medium Light",
      description: "Air-purifying plant that produces baby plantlets",
    },
    {
      id: 12,
      name: "Rubber Plant",
      price: 54.99,
      image: "https://picsum.photos/300/400?random=52",
      category: "Indoor Plants",
      size: "Large",
      careLevel: "Medium",
      light: "Medium Light",
      description: "Sturdy plant with large, glossy leaves",
    },
    {
      id: 13,
      name: "Calathea Orbifolia",
      price: 39.99,
      image: "https://picsum.photos/300/400?random=53",
      category: "Indoor Plants",
      size: "Medium",
      careLevel: "Medium",
      light: "Medium Light",
      description: "Stunning plant with large, round leaves and silver stripes",
    },
    {
      id: 14,
      name: "String of Pearls",
      price: 21.99,
      image: "https://picsum.photos/300/400?random=54",
      category: "Indoor Plants",
      size: "Small",
      careLevel: "Medium",
      light: "Bright Light",
      description: "Unique trailing succulent with pearl-like leaves",
    },
    {
      id: 15,
      name: "Bird of Paradise",
      price: 79.99,
      image: "https://picsum.photos/300/400?random=55",
      category: "Indoor Plants",
      size: "Large",
      careLevel: "Hard",
      light: "Bright Light",
      description: "Tropical plant that can grow into a large statement piece",
    },
  ];

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    let filtered = products;



    // Filter by size
    if (selectedSize) {
      filtered = filtered.filter(product => product.size === selectedSize);
    }

    // Filter by care level
    if (selectedCareLevel) {
      filtered = filtered.filter(product => product.careLevel === selectedCareLevel);
    }

    // Filter by light requirement
    if (selectedLight) {
      filtered = filtered.filter(product => product.light === selectedLight);
    }

    // Filter by price range
    if (selectedPriceRange) {
      switch (selectedPriceRange) {
        case "Under $20":
          filtered = filtered.filter(product => product.price < 20);
          break;
        case "$20 - $50":
          filtered = filtered.filter(product => product.price >= 20 && product.price <= 50);
          break;
        case "$50 - $100":
          filtered = filtered.filter(product => product.price > 50 && product.price <= 100);
          break;
        case "Over $100":
          filtered = filtered.filter(product => product.price > 100);
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [selectedSize, selectedCareLevel, selectedLight, selectedPriceRange]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case "Price: Low to High":
        return sorted.sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return sorted.sort((a, b) => b.price - a.price);
      case "Newest First":
        return sorted.sort((a, b) => b.id - a.id);
      case "Popular":
        return sorted.sort((a, b) => a.id - b.id);
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const clearAllFilters = () => {
    setSelectedSize("");
    setSelectedCareLevel("");
    setSelectedLight("");
    setSelectedPriceRange("");
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedSize) count++;
    if (selectedCareLevel) count++;
    if (selectedLight) count++;
    if (selectedPriceRange) count++;
    return count;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Filter</h2>
                {getActiveFiltersCount() > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
              


              {/* Size */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value=""
                      checked={selectedSize === ""}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Sizes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value="Small"
                      checked={selectedSize === "Small"}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Small</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value="Medium"
                      checked={selectedSize === "Medium"}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Medium</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value="Large"
                      checked={selectedSize === "Large"}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Large</span>
                  </label>
                </div>
              </div>

              {/* Care Level */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Care Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="careLevel"
                      value=""
                      checked={selectedCareLevel === ""}
                      onChange={(e) => setSelectedCareLevel(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Levels</span>
                  </label>
                  {careLevels.map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="radio"
                        name="careLevel"
                        value={level}
                        checked={selectedCareLevel === level}
                        onChange={(e) => setSelectedCareLevel(e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Light Requirement */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Light Requirement</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="light"
                      value=""
                      checked={selectedLight === ""}
                      onChange={(e) => setSelectedLight(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Light Levels</span>
                  </label>
                  {lightRequirements.map((light) => (
                    <label key={light} className="flex items-center">
                      <input
                        type="radio"
                        name="light"
                        value={light}
                        checked={selectedLight === light}
                        onChange={(e) => setSelectedLight(e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{light}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      value=""
                      checked={selectedPriceRange === ""}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Prices</span>
                  </label>
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range}
                        checked={selectedPriceRange === range}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content - Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">INDOOR PLANTS</h1>
                <p className="text-sm text-gray-600 mt-1">
                  {sortedProducts.length} of {products.length} products
                </p>
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🌱</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or clear all filters</p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-w-3 aspect-h-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {product.size}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {product.careLevel}
                        </span>
                        {product.category === "Indoor Plants" && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {product.light}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPlant;
