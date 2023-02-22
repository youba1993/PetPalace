import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to PetPalace</h1>
      <p className="text-gray-500 mb-4">Find the best deals on everything you need for your furry friend.</p>
      <div className="flex justify-center">
        <Link to="/products" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
