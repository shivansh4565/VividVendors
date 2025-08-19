import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const ProductDetails = ({ toggleCart }) => {
  // State for managing product interactions
  const [selectedColor, setSelectedColor] = useState('Burgundy');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAddedMsg, setShowAddedMsg] = useState(false);

  // Handle quantity changes
  const handleQuantityChange = (action) => {
    if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  // Product data
  const products = [
    {
      name: 'Slim-Fit Easy-Iron Shirt',
      price: 34.99,
      description:
        'A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.',
      colors: [
        { name: 'Gray', value: '#808080' },
        { name: 'Black', value: '#000000' },
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      characteristics: {
        Brand: 'Urban Chic',
        Material: 'Cotton',
      },
      images: [
        {
          url: 'https://picsum.photos/id/1015/600/800',
          thumbnail: 'https://picsum.photos/id/1015/100/100',
        },
        {
          url: 'https://picsum.photos/id/1025/600/800',
          thumbnail: 'https://picsum.photos/id/1025/100/100',
        },
      ],
      isBestSeller: true,
    },
    {
      name: 'Classic Cotton Polo',
      price: 29.99,
      description:
        'A classic polo shirt made from premium cotton with a comfortable regular fit. Features ribbed collar and cuffs, two-button placket, and side slits.',
      colors: [
        { name: 'Navy', value: '#000080' },
        { name: 'White', value: '#FFFFFF' },
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      characteristics: {
        Brand: 'Urban Chic',
        Material: 'Cotton',
      },
      images: [
        {
          url: 'https://picsum.photos/id/1020/600/800',
          thumbnail: 'https://picsum.photos/id/1020/100/100',
        },
        {
          url: 'https://picsum.photos/id/1035/600/800',
          thumbnail: 'https://picsum.photos/id/1035/100/100',
        },
      ],
      isBestSeller: false,
    },
  ];

  // Use first product as default
  const product = products[0];
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setShowAddedMsg(true);
    setTimeout(() => setShowAddedMsg(false), 2000);
    toggleCart();
  };

  return (
    <>
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {product.isBestSeller && (
            <h2 className="text-2xl font-bold mb-6">Best Seller</h2>
          )}

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Image Gallery */}
            <div className="md:w-1/2 flex gap-4">
              <div className="flex flex-col gap-2">
                {product.images.map((image, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className="w-16 h-16 rounded-lg overflow-hidden border-2"
                    >
                      <img
                        src={image.thumbnail}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
              <div className="flex-1">
                <img
                  src={product.images[selectedImageIndex].url}
                  alt={product.name}
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Right side - Product Info */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
              <p className="text-xl mb-4">$ {product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="mb-2">Color:</p>
                <div className="flex gap-2">
                  {product.colors.map((color) => {
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full`}
                        style={{ backgroundColor: color.value }}
                      ></button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="mb-2">Size:</p>
                <div className="flex gap-2">
                  {product.sizes.map((size) => {
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded ${
                          selectedSize === size ? 'bg-gray-100' : ''
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="mb-2">Quantity:</p>
                <div className="flex items-center gap-4 border rounded w-fit">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="px-4 py-2"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="px-4 py-2"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              {showAddedMsg && (
                <div className="mb-4 p-2 bg-green-100 text-green-800 rounded shadow text-center">
                  Added to cart!
                </div>
              )}
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
              >
                ADD TO CART
              </button>

              {/* Characteristics */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Characteristics:</h3>
                {Object.entries(product.characteristics).map(([key, value]) => {
                  return (
                    <div key={key} className="flex gap-4 py-2">
                      <span className="text-gray-600">{key}</span>
                      <span>{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Wears for Women Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Top Wears for Women
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Women's Summer Floral Dress",
              "Women's Knit Cardigan",
              "Women's High-Waist Jeans",
              "Women's Silk Blouse",
              "Women's Casual Linen Shirt",
              "Women's Wrap Midi Skirt",
              "Women's Puff Sleeve Top",
              "Women's Ribbed Turtleneck"
            ].map((productName, index) => {
              return (
                <div key={index} className="w-56 flex flex-col items-center">
                  <img
                    src={`https://picsum.photos/300/400?random=${index + 1}`}
                    alt={productName}
                    className="w-full h-72 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <div className="font-medium">{productName}</div>
                    <div className="text-gray-600">$100</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            You May Also Like
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Men's Classic Oxford Shirt",
              "Men's Slim-Fit Chinos",
              "Men's Denim Jacket",
              "Men's Polo T-Shirt",
              "Women's Pleated Midi Skirt",
              "Women's Cropped Denim Jacket",
              "Men's Crewneck Sweatshirt",
              "Women's Cashmere Sweater"
            ].map((productName, index) => {
              return (
                <div key={index} className="w-56 flex flex-col items-center">
                  <img
                    src={`https://picsum.photos/300/400?random=${index + 20}`}
                    alt={productName}
                    className="w-full h-72 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <div className="font-medium">{productName}</div>
                    <div className="text-gray-600">
                      ${(20 + index * 5).toFixed(2)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
