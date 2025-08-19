import React, { useState, useMemo } from "react";

const Collectionpage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("Men");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState("Price: Low to High");

  const colors = [
    { name: "Red", value: "red", hex: "#EF4444" },
    { name: "Blue", value: "blue", hex: "#3B82F6" },
    { name: "Black", value: "black", hex: "#111827" },
    { name: "Green", value: "green", hex: "#10B981" },
    { name: "Yellow", value: "yellow", hex: "#F59E0B" },
    { name: "Gray", value: "gray", hex: "#6B7280" },
    { name: "White", value: "white", hex: "#FFFFFF" },
    { name: "Pink", value: "pink", hex: "#EC4899" },
    { name: "Cream", value: "cream", hex: "#FEF3C7" },
    { name: "Dark Blue", value: "darkBlue", hex: "#1E40AF" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Polyester"];

  const products = [
    {
      id: 1,
      name: "V-Neck Classic T-Shirt",
      price: 14.99,
      image: "https://picsum.photos/300/400?random=1",
      category: "Top Wear",
      gender: "Men",
      colors: ["black", "white", "blue"],
      sizes: ["S", "M", "L", "XL"],
      material: "Cotton",
    },
    {
      id: 2,
      name: "Oversized Graphic T-Shirt",
      price: 19.99,
      image: "https://picsum.photos/300/400?random=2",
      category: "Top Wear",
      gender: "Men",
      colors: ["white", "black"],
      sizes: ["M", "L", "XL", "XXL"],
      material: "Cotton",
    },
    {
      id: 3,
      name: "Regular-Fit Henley Shirt",
      price: 22.99,
      image: "https://picsum.photos/300/400?random=3",
      category: "Top Wear",
      gender: "Men",
      colors: ["white", "gray", "blue"],
      sizes: ["S", "M", "L"],
      material: "Cotton",
    },
    {
      id: 4,
      name: "Polo T-Shirt with Ribbed Collar",
      price: 24.99,
      image: "https://picsum.photos/300/400?random=4",
      category: "Top Wear",
      gender: "Men",
      colors: ["gray", "blue", "black"],
      sizes: ["M", "L", "XL"],
      material: "Polyester",
    },
    {
      id: 5,
      name: "Classic White T-Shirt",
      price: 12.99,
      image: "https://picsum.photos/300/400?random=5",
      category: "Top Wear",
      gender: "Men",
      colors: ["white"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      material: "Cotton",
    },
    {
      id: 6,
      name: "Formal Business Suit",
      price: 89.99,
      image: "https://picsum.photos/300/400?random=6",
      category: "Bottom Wear",
      gender: "Men",
      colors: ["black", "gray", "darkBlue"],
      sizes: ["M", "L", "XL"],
      material: "Wool",
    },
    {
      id: 7,
      name: "Casual Denim Jacket",
      price: 45.99,
      image: "https://picsum.photos/300/400?random=7",
      category: "Top Wear",
      gender: "Men",
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
      material: "Cotton",
    },
    {
      id: 8,
      name: "Premium Cotton Hoodie",
      price: 34.99,
      image: "https://picsum.photos/300/400?random=8",
      category: "Top Wear",
      gender: "Men",
      colors: ["gray", "black", "cream"],
      sizes: ["M", "L", "XL", "XXL"],
      material: "Cotton",
    },
    {
      id: 9,
      name: "Women's Summer Dress",
      price: 39.99,
      image: "https://picsum.photos/300/400?random=9",
      category: "Top Wear",
      gender: "Women",
      colors: ["pink", "white", "cream"],
      sizes: ["XS", "S", "M", "L"],
      material: "Cotton",
    },
    {
      id: 10,
      name: "Women's Blouse",
      price: 29.99,
      image: "https://picsum.photos/300/400?random=10",
      category: "Top Wear",
      gender: "Women",
      colors: ["white", "blue", "pink"],
      sizes: ["S", "M", "L", "XL"],
      material: "Polyester",
    },
  ];

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by gender
    if (selectedGender) {
      filtered = filtered.filter(product => product.gender === selectedGender);
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Filter by materials
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(product => 
        selectedMaterials.includes(product.material)
      );
    }

    return filtered;
  }, [selectedCategory, selectedGender, selectedColors, selectedSizes, selectedMaterials]);

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
        return sorted.sort((a, b) => a.id - b.id); // For demo, using ID as popularity
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const handleColorToggle = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleMaterialToggle = (material) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory("");
    setSelectedGender("Men");
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedMaterials([]);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory) count++;
    if (selectedGender !== "Men") count++;
    if (selectedColors.length > 0) count++;
    if (selectedSizes.length > 0) count++;
    if (selectedMaterials.length > 0) count++;
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
                      value="Top Wear"
                      checked={selectedCategory === "Top Wear"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Top Wear</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="Bottom Wear"
                      checked={selectedCategory === "Bottom Wear"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Bottom Wear</span>
                  </label>
                </div>
              </div>

              {/* Gender */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Gender</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Men"
                      checked={selectedGender === "Men"}
                      onChange={(e) => setSelectedGender(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Men</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Women"
                      checked={selectedGender === "Women"}
                      onChange={(e) => setSelectedGender(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Women</span>
                  </label>
                </div>
              </div>

              {/* Color */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                <div className="grid grid-cols-3 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleColorToggle(color.value)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColors.includes(color.value)
                          ? "border-gray-900 scale-110"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => handleSizeToggle(size)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => handleMaterialToggle(material)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{material}</span>
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
                <h1 className="text-2xl font-bold text-gray-900">ALL COLLECTION</h1>
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
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
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
                      <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.colors.slice(0, 3).map((color) => {
                          const colorData = colors.find(c => c.value === color);
                          return colorData ? (
                            <div
                              key={color}
                              className="w-3 h-3 rounded-full border border-gray-300"
                              style={{ backgroundColor: colorData.hex }}
                              title={colorData.name}
                            />
                          ) : null;
                        })}
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

export default Collectionpage;
