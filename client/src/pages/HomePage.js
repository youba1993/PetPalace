import React, { useState, useEffect } from 'react';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className=" p-8 container mx-auto">
      <h1 className="text-2xl font-bold text-yellow-500 mb-4">Welcome to PetPalace!</h1>
      <p className="mb-8">We offer a wide selection of high-quality pet products at affordable prices. Browse our selection below!</p>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
