import React, { useState, useMemo } from "react";

const PlantAccessories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("Price: Low to High");

  const materials = ["Ceramic", "Metal", "Plastic", "Wood", "Macrame", "Glass"];
  const priceRanges = ["Under $15", "$15 - $30", "$30 - $50", "Over $50"];

  const products = [
    {
      id: 1,
      name: "Ceramic Plant Pot",
      price: 29.99,
      image: "https://picsum.photos/300/400?random=61",
      category: "Planters & Pots",
      size: "Medium",
      material: "Ceramic",
      description: "Beautiful ceramic pot with drainage hole for healthy plant growth",
    },
    {
      id: 2,
      name: "Hanging Macrame Planter",
      price: 39.99,
      image: "https://picsum.photos/300/400?random=62",
      category: "Planters & Pots",
      size: "Medium",
      material: "Macrame",
      description: "Handcrafted macrame hanger perfect for trailing plants",
    },
    {
      id: 3,
      name: "Plant Stand",
      price: 59.99,
      image: "https://picsum.photos/300/400?random=63",
      category: "Display & Stands",
      size: "Large",
      material: "Metal",
      description: "Modern metal stand for displaying multiple plants",
    },
    {
      id: 4,
      name: "Plant Mister",
      price: 14.99,
      image: "https://picsum.photos/300/400?random=64",
      category: "Care Tools",
      size: "Small",
      material: "Plastic",
      description: "Fine mist sprayer for humidity-loving plants",
    },
    {
      id: 5,
      name: "Plant Food Fertilizer",
      price: 16.99,
      image: "https://picsum.photos/300/400?random=65",
      category: "Care Tools",
      size: "Small",
      material: "Plastic",
      description: "Nutrient-rich fertilizer for healthy plant growth",
    },
    {
      id: 6,
      name: "Watering Can",
      price: 34.99,
      image: "https://picsum.photos/300/400?random=66",
      category: "Care Tools",
      size: "Medium",
      material: "Metal",
      description: "Elegant watering can with long spout for precise watering",
    },
    {
      id: 7,
      name: "Plant Labels",
      price: 9.99,
      image: "https://picsum.photos/300/400?random=67",
      category: "Care Tools",
      size: "Small",
      material: "Wood",
      description: "Set of 20 wooden plant labels for organization",
    },
    {
      id: 8,
      name: "Humidity Tray",
      price: 19.99,
      image: "https://picsum.photos/300/400?random=68",
      category: "Care Tools",
      size: "Medium",
      material: "Plastic",
      description: "Tray with pebbles to increase humidity around plants",
    },
    {
      id: 9,
      name: "Plant Pruning Shears",
      price: 24.99,
      image: "https://picsum.photos/300/400?random=69",
      category: "Care Tools",
      size: "Small",
      material: "Metal",
      description: "Sharp pruning shears for maintaining plant health",
    },
    {
      id: 10,
      name: "Glass Terrarium",
      price: 44.99,
      image: "https://picsum.photos/300/400?random=70",
      category: "Planters & Pots",
      size: "Medium",
      material: "Glass",
      description: "Beautiful glass terrarium for creating mini gardens",
    },
    {
      id: 11,
      name: "Wall Mounted Planter",
      price: 49.99,
      image: "https://picsum.photos/300/400?random=71",
      category: "Planters & Pots",
      size: "Medium",
      material: "Metal",
      description: "Modern wall-mounted planter for space-saving greenery",
    },
    {
      id: 12,
      name: "Plant Care Book",
      price: 19.99,
      image: "https://picsum.photos/300/400?random=72",
      category: "Books & Guides",
      size: "Medium",
      material: "Paper",
      description: "Comprehensive guide to indoor plant care and maintenance",
    },
    {
      id: 13,
      name: "Soil Moisture Meter",
      price: 12.99,
      image: "https://picsum.photos/300/400?random=73",
      category: "Care Tools",
      size: "Small",
      material: "Plastic",
      description: "Digital meter to check soil moisture levels",
    },
    {
      id: 14,
      name: "Plant Hanging Bracket",
      price: 18.99,
      image: "https://picsum.photos/300/400?random=74",
      category: "Display & Stands",
      size: "Small",
      material: "Metal",
      description: "Ceiling bracket for hanging planters",
    },
    {
      id: 15,
      name: "Decorative Pebbles",
      price: 8.99,
      image: "https://picsum.photos/300/400?random=75",
      category: "Care Tools",
      size: "Small",
      material: "Stone",
      description: "Natural pebbles for top dressing and decoration",
    },
  ];

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by size
    if (selectedSize) {
      filtered = filtered.filter(product => product.size === selectedSize);
    }

    // Filter by material
    if (selectedMaterial) {
      filtered = filtered.filter(product => product.material === selectedMaterial);
    }

    // Filter by price range
    if (selectedPriceRange) {
      switch (selectedPriceRange) {
        case "Under $15":
          filtered = filtered.filter(product => product.price < 15);
          break;
        case "$15 - $30":
          filtered = filtered.filter(product => product.price >= 15 && product.price <= 30);
          break;
        case "$30 - $50":
          filtered = filtered.filter(product => product.price > 30 && product.price <= 50);
          break;
        case "Over $50":
          filtered = filtered.filter(product => product.price > 50);
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [selectedCategory, selectedSize, selectedMaterial, selectedPriceRange]);

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
    setSelectedCategory("");
    setSelectedSize("");
    setSelectedMaterial("");
    setSelectedPriceRange("");
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory) count++;
    if (selectedSize) count++;
    if (selectedMaterial) count++;
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
              
              {/* Category */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ""}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Categories</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="Planters & Pots"
                      checked={selectedCategory === "Planters & Pots"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Planters & Pots</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="Care Tools"
                      checked={selectedCategory === "Care Tools"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Care Tools</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="Display & Stands"
                      checked={selectedCategory === "Display & Stands"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Display & Stands</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="Books & Guides"
                      checked={selectedCategory === "Books & Guides"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Books & Guides</span>
                  </label>
                </div>
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

              {/* Material */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="material"
                      value=""
                      checked={selectedMaterial === ""}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Materials</span>
                  </label>
                  {materials.map((material) => (
                    <label key={material} className="flex items-center">
                      <input
                        type="radio"
                        name="material"
                        value={material}
                        checked={selectedMaterial === material}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{material}</span>
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
                <h1 className="text-2xl font-bold text-gray-900">PLANT ACCESSORIES</h1>
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
                <div className="text-gray-400 text-6xl mb-4">🪴</div>
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
                          {product.material}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {product.category}
                        </span>
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

export default PlantAccessories;
