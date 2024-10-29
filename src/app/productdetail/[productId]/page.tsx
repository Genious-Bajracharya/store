'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';


export default function ProductDetail() {

  const params = useParams(); 
  const { productId } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      };
      fetchProduct();
    }
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    alert("Product added successfully")
  } 

  return (
    <div className='bg-slate-50 '>
      <div>
      <Navbar/>
      </div>
     
      <div className="container mx-auto p-6 max-w-3xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-1/2">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-contain rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>

          
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product.title}</h1>
              <p className="text-gray-500 text-lg mb-6">{product.description}</p>
              <p className="text-2xl font-bold text-red-500 mb-4">${product.price}</p>
            </div>

            
            <button 
              onClick={() => handleAddToCart()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition-colors mt-6 lg:mt-0"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
  
    </div>
    
  );
}


interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  }